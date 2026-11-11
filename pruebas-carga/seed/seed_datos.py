"""Siembra la BD de PRUEBAS con datos para JMeter.

Se ejecuta DENTRO del contenedor del backend de pruebas (ahí están argon2, pymysql y la API):

    docker exec -i datahorse-pruebas-backend python - < pruebas-carga/seed/seed_datos.py > pruebas-carga/datos/usuarios.csv

Qué hace:
  1. Inserta N usuarios ya verificados (estado 'activo', rol usuario) con la misma contraseña,
     cifrada con el mismo Argon2 del backend. Si ya existen, no los duplica.
  2. Con los primeros M usuarios crea caballos por la API real (login + POST /api/v1/caballos):
     un Macho (genera publicación) y una Hembra por usuario.
  3. Escribe por stdout el CSV de usuarios para JMeter (correo,password). El resumen va por stderr.

Es idempotente: si un usuario ya tiene caballos, no le crea más.
"""
import os
import sys
from datetime import date

import pymysql
import requests
from argon2 import PasswordHasher

# --- Parámetros (se pueden cambiar con variables de entorno) ---
TOTAL_USUARIOS = int(os.getenv("SEED_USUARIOS", "300"))
USUARIOS_CON_CABALLOS = int(os.getenv("SEED_CON_CABALLOS", "50"))
PASSWORD = os.getenv("SEED_PASSWORD", "Carga2026!")
PREFIJO = "carga"
DOMINIO = "test.com"
API = "http://localhost:8000"

ROL_USUARIO = 2
ESTADO_ACTIVO = "activo"
RAZAS = (1, 2, 3, 4, 5, 6, 7, 8)
COLORES = ("Castaño", "Alazán", "Tordo", "Negro", "Bayo")
CIUDADES = ("Bogotá", "Medellín", "Cali", "Tunja", "Villavicencio")


def log(msg: str) -> None:
    print(msg, file=sys.stderr, flush=True)


def correo(i: int) -> str:
    return f"{PREFIJO}{i:03d}@{DOMINIO}"


def conectar():
    return pymysql.connect(
        host=os.environ["DB_HOST"],
        port=int(os.environ["DB_PORT"]),
        user=os.environ["DB_USER"],
        password=os.environ["DB_PASSWORD"],
        database=os.environ["DB_NAME"],
        charset="utf8mb4",
        autocommit=True,
    )


def sembrar_usuarios(cur) -> int:
    hash_pw = PasswordHasher().hash(PASSWORD)  # un solo hash: todos comparten contraseña
    hoy = date.today()
    filas = [
        (f"Usuario Carga {i:03d}", correo(i), hash_pw, "3000000000", CIUDADES[i % len(CIUDADES)],
         hoy, ESTADO_ACTIVO, ROL_USUARIO)
        for i in range(1, TOTAL_USUARIOS + 1)
    ]
    return cur.executemany(
        "INSERT IGNORE INTO usuario "
        "(nombre, correo, `contraseña`, telefono, ubicacion, fecha_registro, estado, rol_id_rol) "
        "VALUES (%s, %s, %s, %s, %s, %s, %s, %s)",
        filas,
    )


def caballo(i: int, sexo: str) -> dict:
    datos = {
        "id_raza": RAZAS[i % len(RAZAS)],
        "nombre": f"{'Corcel' if sexo == 'Macho' else 'Yegua'} {i:03d}",
        "sexo": sexo,
        "fecha_nacimiento": f"{2015 + i % 8}-0{1 + i % 9}-15",
        "altura": 1.50 + (i % 20) / 100,
        "color": COLORES[i % len(COLORES)],
        "ubicacion": CIUDADES[i % len(CIUDADES)],
        "descripcion": f"Caballo de prueba de carga #{i}",
        "disponibilidad": "Disponible",
    }
    if sexo == "Macho":
        datos["precio"] = 5_000_000 + i * 10_000
    return datos


def sembrar_caballos(cur) -> tuple[int, int]:
    creados, omitidos = 0, 0
    for i in range(1, USUARIOS_CON_CABALLOS + 1):
        cur.execute(
            "SELECT COUNT(*) FROM caballo c JOIN usuario u ON u.id_usuario = c.usuario_id_usuario "
            "WHERE u.correo = %s",
            (correo(i),),
        )
        if cur.fetchone()[0] > 0:
            omitidos += 1
            continue

        s = requests.Session()
        r = s.post(f"{API}/auth/login", json={"correo": correo(i), "password": PASSWORD}, timeout=30)
        r.raise_for_status()
        for sexo in ("Macho", "Hembra"):
            r = s.post(f"{API}/api/v1/caballos", json=caballo(i, sexo), timeout=30)
            if r.status_code != 201:
                raise RuntimeError(f"POST caballo {correo(i)} {sexo}: {r.status_code} {r.text}")
            creados += 1
    return creados, omitidos


def main() -> None:
    con = conectar()
    with con.cursor() as cur:
        nuevos = sembrar_usuarios(cur)
        log(f"Usuarios insertados: {nuevos} (ya existían {TOTAL_USUARIOS - nuevos})")

        creados, omitidos = sembrar_caballos(cur)
        log(f"Caballos creados por API: {creados} | usuarios que ya tenían caballos: {omitidos}")

        cur.execute("SELECT COUNT(*) FROM usuario WHERE correo LIKE %s", (f"{PREFIJO}%@{DOMINIO}",))
        log(f"Total usuarios de carga: {cur.fetchone()[0]}")
        cur.execute("SELECT COUNT(*) FROM caballo")
        log(f"Total caballos: {cur.fetchone()[0]}")
        cur.execute("SELECT COUNT(*) FROM publicacion")
        log(f"Total publicaciones: {cur.fetchone()[0]}")
    con.close()

    # CSV para JMeter (stdout)
    print("correo,password")
    for i in range(1, TOTAL_USUARIOS + 1):
        print(f"{correo(i)},{PASSWORD}")


if __name__ == "__main__":
    main()
