-- =====================================================
-- DataHorse: chat entre propietarios (conversacion y mensaje)
-- Aplicar sobre una base existente. Las dos tablas deben estar vacías:
-- se cambia cómo se generan los ids y se añaden columnas NOT NULL.
-- (Prefijo zz_ para que en una base nueva corra después de
--  datahorse2_conversacion.sql y datahorse2_mensaje.sql.)
-- =====================================================

-- 0. Comprobar que están vacías (las dos cuentas deben dar 0)
SELECT COUNT(*) AS conversaciones FROM conversacion;
SELECT COUNT(*) AS mensajes FROM mensaje;

-- 1. Quitar temporalmente la FK de mensaje -> conversacion
--    (MySQL no deja modificar id_conversacion mientras otra tabla lo referencia)
ALTER TABLE mensaje DROP FOREIGN KEY fk_mensaje_conversacion;

-- 2. conversacion: id autoincremental, publicación y participante interesado
--    (el vendedor se obtiene de publicacion.usuario_id_usuario)
ALTER TABLE conversacion
  MODIFY id_conversacion INT NOT NULL AUTO_INCREMENT,
  ADD COLUMN publicacion_id_publicacion INT NOT NULL,
  ADD COLUMN usuario_id_interesado INT NOT NULL,
  ADD UNIQUE KEY uq_conversacion (publicacion_id_publicacion, usuario_id_interesado),
  ADD KEY fk_conversacion_interesado_idx (usuario_id_interesado),
  ADD CONSTRAINT fk_conversacion_publicacion
      FOREIGN KEY (publicacion_id_publicacion) REFERENCES publicacion (id_publicacion),
  ADD CONSTRAINT fk_conversacion_interesado
      FOREIGN KEY (usuario_id_interesado) REFERENCES usuario (id_usuario);

-- 3. mensaje: id autoincremental, fecha con hora y FK restaurada
ALTER TABLE mensaje
  MODIFY id_mensaje INT NOT NULL AUTO_INCREMENT,
  MODIFY fecha_envio DATETIME NOT NULL,
  ADD CONSTRAINT fk_mensaje_conversacion
      FOREIGN KEY (conversacion_id_conversacion) REFERENCES conversacion (id_conversacion);

-- 4. Verificar el resultado
SHOW CREATE TABLE conversacion;
SHOW CREATE TABLE mensaje;
