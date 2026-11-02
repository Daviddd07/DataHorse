-- Tablas de logs: log_frontend (logs enviados por el navegador) y logs_tecnicos (middleware HTTP del backend).
-- La tabla usuario se crea en otro script; se desactiva la verificación de FK como en los demás.
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;

CREATE TABLE IF NOT EXISTS log_frontend (
  id_log      BIGINT AUTO_INCREMENT PRIMARY KEY,
  id_usuario  INT NULL,
  nivel       ENUM('debug','info','warn','error') NOT NULL,
  mensaje     VARCHAR(1000) NOT NULL,
  contexto    JSON NULL,
  url         VARCHAR(500) NOT NULL,
  user_agent  VARCHAR(500) NOT NULL,
  sesion_id   VARCHAR(50) NOT NULL,
  fecha       DATETIME NOT NULL,
  creado_en   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY idx_log_fecha (fecha),
  KEY idx_log_nivel (nivel),
  KEY idx_log_usuario (id_usuario),
  CONSTRAINT fk_log_usuario FOREIGN KEY (id_usuario)
    REFERENCES usuario (id_usuario) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS logs_tecnicos (
    id BIGINT NOT NULL AUTO_INCREMENT,
    nivel VARCHAR(20) NOT NULL,
    modulo VARCHAR(255) NOT NULL,
    mensaje TEXT NOT NULL,
    request_id VARCHAR(100) NULL,
    metodo_http VARCHAR(10) NULL,
    ruta VARCHAR(500) NULL,
    estado_http SMALLINT NULL,
    duracion_ms DECIMAL(12, 2) NULL,
    excepcion TEXT NULL,
    fecha_hora TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_logs_tecnicos_fecha (fecha_hora),
    INDEX idx_logs_tecnicos_nivel (nivel),
    INDEX idx_logs_tecnicos_request (request_id)
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_0900_ai_ci;

SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
