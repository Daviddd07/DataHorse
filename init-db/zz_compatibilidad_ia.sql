-- Evaluación de compatibilidad con IA: agrega a las tablas de compatibilidad lo que hace falta
-- para guardar el par evaluado (caballo + yegua) y la respuesta del modelo.
-- El prefijo zz_ hace que corra después de los scripts que crean las tablas.

ALTER TABLE solicitudcompatibilidad
  ADD COLUMN yegua_id_caballo INT NULL AFTER caballo_id_caballo,
  -- SHA-256 de los datos enviados a la IA: si no cambian, se reutiliza el resultado guardado
  ADD COLUMN huella_datos CHAR(64) NULL,
  ADD COLUMN modelo VARCHAR(80) NULL,
  ADD COLUMN creado_en DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ADD KEY idx_solicitud_par (caballo_id_caballo, yegua_id_caballo, huella_datos),
  ADD KEY idx_solicitud_usuario_fecha (usuario_id_usuario, creado_en),
  ADD CONSTRAINT fk_solicitud_yegua FOREIGN KEY (yegua_id_caballo) REFERENCES caballo (id_caballo);

ALTER TABLE resultadocompatibilidad
  ADD COLUMN nivel_confianza VARCHAR(10) NULL,
  ADD COLUMN resumen_cria TEXT NULL;
