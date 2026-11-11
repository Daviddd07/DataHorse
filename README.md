# DataHorse

Plataforma web para centralizar la información de caballos destinados a reproducción: publicación y búsqueda de ejemplares, compatibilidad con IA, chat entre propietarios y reseñas.

Este repositorio **une todo el proyecto** para levantarlo con Docker. El código vive en dos repositorios propios, incluidos aquí como submódulos:

| Carpeta | Repositorio | Tecnología |
|---|---|---|
| `backend/` | [DataHorse_Backend](https://github.com/Daviddd07/DataHorse_Backend) (rama `dev`) | FastAPI · Python 3.12 |
| `frontend/` | [DataHorse_Frontend](https://github.com/Daviddd07/DataHorse_Frontend) (rama `dev`) | Angular · Nginx |

Lo que es propio de este repositorio:

- `docker-compose.yml`: MySQL, backend, frontend y Grafana.
- `init-db/`: scripts que crean la base de datos la primera vez.
- `grafana/`: conexión a MySQL y dashboard de logs, configurados automáticamente.

---

## Puesta en marcha

### 1. Clonar con los submódulos

```bash
git clone --recurse-submodules <url-de-este-repositorio>
```

Si ya se clonó sin `--recurse-submodules`:

```bash
git submodule update --init
```

### 2. Crear los archivos `.env`

Ninguno se sube a git.

**`.env` en la raíz** (lo usa MySQL):

```env
DB_ROOT_PASSWORD=una-contraseña-segura
DB_NAME=datahorse2
```

**`backend/.env`**: las variables están explicadas en el README del backend. Dentro de Docker la base se alcanza por el nombre del servicio:

```env
DB_HOST=db
DB_PORT=3306
DB_USER=root
DB_PASSWORD=<la misma DB_ROOT_PASSWORD>
DB_NAME=datahorse2
SECRET_KEY=<mínimo 32 caracteres>
CODIGO_SECRET=<mínimo 32 caracteres>
ALLOWED_ORIGINS=http://localhost,http://127.0.0.1

# Primer administrador (opcional): se crea al arrancar si el correo no existe
ADMIN_CORREO=admin@ejemplo.com
ADMIN_CONTRASENA=<8-64 caracteres, con mayúscula, minúscula y número>
```

Para generar un secreto: `python -c "import secrets; print(secrets.token_urlsafe(48))"`. Si falta un secreto o es demasiado corto, el backend no arranca y lo dice en el log.

### 3. Levantar

```bash
docker compose up -d --build
```

| Servicio | Dirección |
|---|---|
| Aplicación (frontend) | http://localhost |
| API | http://localhost:8000 · documentación en http://localhost:8000/docs |
| Grafana (logs) | http://localhost:3000 · primer ingreso `admin` / `admin`, pide cambiarla |
| MySQL | `localhost:3307` |

---

## Base de datos

La primera vez que arranca, con el volumen `mysql_data` vacío, MySQL ejecuta en orden los scripts de `init-db/`:

| Script | Contenido |
|---|---|
| `01_esquema.sql` | Estructura completa de todas las tablas |
| `02_datos_base.sql` | Catálogos: roles, razas y compatibilidad entre razas |
| `03_grafana_lector.sql` | Usuario de solo lectura para Grafana |

No se crean usuarios con SQL: el primer administrador lo crea el backend con `ADMIN_CORREO` / `ADMIN_CONTRASENA`.

`init-db/historico/` guarda los scripts anteriores como referencia. MySQL no los ejecuta porque están en una subcarpeta.

> **Importante:** los scripts **solo corren con una base vacía**. Si el código necesita una columna nueva en una base que ya existe, hay que aplicar el cambio a mano (y actualizar `01_esquema.sql`). Para empezar desde cero, `docker compose down -v` **borra todos los datos**.

---

## Trabajar con los submódulos

Los cambios del backend o del frontend se hacen y se commitean **en su propio repositorio**, como siempre. Este repositorio solo guarda en qué commit está cada uno.

Cuando back o front tengan commits nuevos que deban ir juntos:

```bash
git add backend frontend
git commit -m "Actualiza backend y frontend"
```

Para traer las últimas versiones de las ramas `dev`:

```bash
git submodule update --remote
```
