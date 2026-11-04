-- Usuario de solo lectura para Grafana.
-- Solo puede leer las tablas de logs: nunca la tabla usuario ni modificar datos.
-- El prefijo zz_ hace que corra después de los scripts que crean las tablas.
-- La misma contraseña está en grafana/provisioning/datasources/mysql.yml.

CREATE USER IF NOT EXISTS 'grafana_lector'@'%' IDENTIFIED BY '<GRAFANA_DB_PASSWORD>';

GRANT SELECT ON logs_tecnicos TO 'grafana_lector'@'%';
GRANT SELECT ON log_frontend TO 'grafana_lector'@'%';

FLUSH PRIVILEGES;
