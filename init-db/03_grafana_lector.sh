#!/bin/bash
# Usuario de solo lectura para Grafana.
# Solo puede leer las tablas de logs: nunca la tabla usuario ni modificar datos.
# El prefijo 03_ hace que corra después de los scripts que crean las tablas.
# La contraseña NO va en el código: viene de GRAFANA_DB_PASSWORD (.env de la raíz, ver .env.example),
# la misma variable que usa grafana/provisioning/datasources/mysql.yml.
# Es .sh (no .sql) para poder leer la variable; la imagen de MySQL lo ejecuta igual al crear la base.
# Usa el cliente mysql directamente (funciona tanto si el entrypoint lo ejecuta como si lo carga con "source").
# Debe tener saltos de línea LF (lo asegura .gitattributes).

if [ -z "${GRAFANA_DB_PASSWORD:-}" ]; then
	echo "ERROR: falta GRAFANA_DB_PASSWORD en el .env de la raíz (usuario de solo lectura de Grafana)." >&2
	exit 1
fi

mysql --protocol=socket -uroot -p"${MYSQL_ROOT_PASSWORD}" "${MYSQL_DATABASE}" <<-EOSQL
	CREATE USER IF NOT EXISTS 'grafana_lector'@'%' IDENTIFIED BY '${GRAFANA_DB_PASSWORD}';

	GRANT SELECT ON logs_tecnicos TO 'grafana_lector'@'%';
	GRANT SELECT ON log_frontend TO 'grafana_lector'@'%';

	FLUSH PRIVILEGES;
EOSQL
