-- =====================================================
-- DataHorse: limpieza automática de logs
-- Sin esto los logs crecen para siempre (cada petición HTTP agrega una fila).
-- Son eventos de MySQL: corren solos dentro de la base, sin depender del backend.
-- Requiere event_scheduler=ON (es el valor por defecto en MySQL 8).
--
-- Cada hora borran como máximo 5000 filas por tabla, para no bloquearlas.
-- Eso alcanza para ~120.000 filas por día y tabla; si alguna vez se
-- genera más, basta con subir el LIMIT.
--
-- Retención: logs técnicos y del frontend 30 días; auditoría 1 año.
-- Para cambiarla: ALTER EVENT ... DO DELETE ... INTERVAL <n> DAY ...
-- =====================================================

CREATE EVENT IF NOT EXISTS limpiar_logs_tecnicos
  ON SCHEDULE EVERY 1 HOUR
  COMMENT 'Borra logs técnicos de más de 30 días'
  DO
    DELETE FROM logs_tecnicos
    WHERE fecha_hora < NOW() - INTERVAL 30 DAY
    ORDER BY fecha_hora
    LIMIT 5000;

CREATE EVENT IF NOT EXISTS limpiar_log_frontend
  ON SCHEDULE EVERY 1 HOUR
  COMMENT 'Borra logs del frontend de más de 30 días'
  DO
    DELETE FROM log_frontend
    WHERE fecha < NOW() - INTERVAL 30 DAY
    ORDER BY fecha
    LIMIT 5000;

CREATE EVENT IF NOT EXISTS limpiar_audit_logs
  ON SCHEDULE EVERY 1 HOUR
  COMMENT 'Borra eventos de auditoría de más de 1 año'
  DO
    DELETE FROM audit_logs
    WHERE fecha_hora < NOW() - INTERVAL 365 DAY
    ORDER BY fecha_hora
    LIMIT 5000;
