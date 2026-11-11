-- =====================================================
-- DataHorse: estructura completa de la base de datos
-- Generado desde la base actual (datahorse2) el 2026-11-09.
-- Ya incluye todos los cambios de los scripts de init-db/historico/
-- (chat, compatibilidad con IA, reseñas, última conexión...).
-- Docker lo ejecuta solo la primera vez, cuando el volumen mysql_data está vacío.
-- =====================================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

/*!50503 SET character_set_client = utf8mb4 */;
-- Auditoría de acciones (login, fotos, documentos...). La escribe audit_log_service.py.
CREATE TABLE `audit_logs` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `usuario_id` int DEFAULT NULL,
  `accion` varchar(100) NOT NULL,
  `modulo` varchar(100) NOT NULL,
  `resultado` varchar(20) NOT NULL,
  `detalle` text,
  `request_id` varchar(100) DEFAULT NULL,
  `fecha_hora` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_audit_usuario` (`usuario_id`),
  KEY `idx_audit_fecha` (`fecha_hora`),
  KEY `idx_audit_modulo_accion` (`modulo`, `accion`),
  CONSTRAINT `fk_audit_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id_usuario`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `caballo` (
  `id_caballo` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(120) NOT NULL,
  `sexo` varchar(20) NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `altura` decimal(5,2) DEFAULT NULL,
  `color` varchar(60) DEFAULT NULL,
  `ubicacion` varchar(180) DEFAULT NULL,
  `descripcion` text,
  `disponibilidad` varchar(30) NOT NULL,
  `raza_id_raza` int NOT NULL,
  `usuario_id_usuario` int NOT NULL,
  `ubicacion_lat` decimal(10,8) DEFAULT NULL,
  `ubicacion_lng` decimal(11,8) DEFAULT NULL,
  `ubicacion_texto` varchar(255) DEFAULT NULL,
  `ciudad` varchar(120) DEFAULT NULL,
  `departamento` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`id_caballo`),
  KEY `fk_caballo_raza` (`raza_id_raza`),
  KEY `fk_caballo_usuario` (`usuario_id_usuario`),
  CONSTRAINT `fk_caballo_raza` FOREIGN KEY (`raza_id_raza`) REFERENCES `raza` (`id_raza`),
  CONSTRAINT `fk_caballo_usuario` FOREIGN KEY (`usuario_id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compatibilidad_razas` (
  `id_compatibilidad` int NOT NULL AUTO_INCREMENT,
  `raza_yegua_id` int NOT NULL,
  `raza_caballo_id` int NOT NULL,
  `porcentaje_compatibilidad` decimal(5,2) NOT NULL,
  PRIMARY KEY (`id_compatibilidad`),
  UNIQUE KEY `uq_compatibilidad_razas` (`raza_yegua_id`,`raza_caballo_id`),
  KEY `fk_compatibilidad_caballo` (`raza_caballo_id`),
  CONSTRAINT `fk_compatibilidad_caballo` FOREIGN KEY (`raza_caballo_id`) REFERENCES `raza` (`id_raza`),
  CONSTRAINT `fk_compatibilidad_yegua` FOREIGN KEY (`raza_yegua_id`) REFERENCES `raza` (`id_raza`),
  CONSTRAINT `chk_porcentaje_compatibilidad` CHECK (((`porcentaje_compatibilidad` >= 0) and (`porcentaje_compatibilidad` <= 100)))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conversacion` (
  `id_conversacion` int NOT NULL AUTO_INCREMENT,
  `fecha_creacion` date NOT NULL,
  `estado` varchar(30) NOT NULL,
  `publicacion_id_publicacion` int NOT NULL,
  `usuario_id_interesado` int NOT NULL,
  PRIMARY KEY (`id_conversacion`),
  UNIQUE KEY `uq_conversacion` (`publicacion_id_publicacion`,`usuario_id_interesado`),
  KEY `fk_conversacion_interesado_idx` (`usuario_id_interesado`),
  CONSTRAINT `fk_conversacion_interesado` FOREIGN KEY (`usuario_id_interesado`) REFERENCES `usuario` (`id_usuario`),
  CONSTRAINT `fk_conversacion_publicacion` FOREIGN KEY (`publicacion_id_publicacion`) REFERENCES `publicacion` (`id_publicacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `descendencia` (
  `id_descendencia` int NOT NULL AUTO_INCREMENT,
  `caballo_id_caballo` int NOT NULL,
  `padre_nombre` varchar(120) DEFAULT NULL,
  `padre_raza` varchar(120) DEFAULT NULL,
  `padre_registro` varchar(60) DEFAULT NULL,
  `padre_logros` varchar(500) DEFAULT NULL,
  `madre_nombre` varchar(120) DEFAULT NULL,
  `madre_raza` varchar(120) DEFAULT NULL,
  `madre_registro` varchar(60) DEFAULT NULL,
  `madre_logros` varchar(500) DEFAULT NULL,
  `abuelo_paterno_nombre` varchar(120) DEFAULT NULL,
  `abuelo_paterno_raza` varchar(120) DEFAULT NULL,
  `abuela_paterna_nombre` varchar(120) DEFAULT NULL,
  `abuela_paterna_raza` varchar(120) DEFAULT NULL,
  `abuelo_materno_nombre` varchar(120) DEFAULT NULL,
  `abuelo_materno_raza` varchar(120) DEFAULT NULL,
  `abuela_materna_nombre` varchar(120) DEFAULT NULL,
  `abuela_materna_raza` varchar(120) DEFAULT NULL,
  `asociacion_registro` varchar(150) DEFAULT NULL,
  `criadero_origen` varchar(150) DEFAULT NULL,
  `modalidad` varchar(60) DEFAULT NULL,
  `temperamento` varchar(60) DEFAULT NULL,
  `condiciones_hereditarias` text,
  `pruebas_geneticas` text,
  `crias_anteriores` smallint unsigned DEFAULT NULL,
  `caracteristicas_crias` text,
  `notas` text,
  `fecha_actualizacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_descendencia`),
  UNIQUE KEY `uq_descendencia_caballo` (`caballo_id_caballo`),
  CONSTRAINT `fk_descendencia_caballo` FOREIGN KEY (`caballo_id_caballo`) REFERENCES `caballo` (`id_caballo`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
-- Documentos de respaldo de un caballo macho (pedigrí, premios, pruebas genéticas).
-- Los archivos van en backend/documentos/ (privado, nunca bajo /uploads).
-- estado_verificacion queda listo para una futura revisión del administrador.
CREATE TABLE `documento_caballo` (
  `id_documento` int NOT NULL AUTO_INCREMENT,
  `caballo_id_caballo` int NOT NULL,
  `tipo` varchar(30) NOT NULL,
  `titulo` varchar(120) NOT NULL,
  `ruta` varchar(255) NOT NULL,
  `nombre_original` varchar(255) NOT NULL,
  `content_type` varchar(60) NOT NULL,
  `tamano_bytes` int unsigned NOT NULL,
  `estado_verificacion` varchar(20) NOT NULL DEFAULT 'sin_revisar',
  `fecha_subida` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_documento`),
  KEY `fk_documento_caballo` (`caballo_id_caballo`),
  CONSTRAINT `fk_documento_caballo` FOREIGN KEY (`caballo_id_caballo`) REFERENCES `caballo` (`id_caballo`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorito` (
  `id_favorito` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `usuario_id_usuario` int NOT NULL,
  `caballo_id_caballo` int NOT NULL,
  PRIMARY KEY (`id_favorito`),
  KEY `fk_favorito_usuario` (`usuario_id_usuario`),
  KEY `fk_favorito_caballo` (`caballo_id_caballo`),
  CONSTRAINT `fk_favorito_caballo` FOREIGN KEY (`caballo_id_caballo`) REFERENCES `caballo` (`id_caballo`),
  CONSTRAINT `fk_favorito_usuario` FOREIGN KEY (`usuario_id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `foto_caballo` (
  `id_foto` bigint unsigned NOT NULL AUTO_INCREMENT,
  `id_caballo` int DEFAULT NULL,
  `ruta` varchar(500) NOT NULL,
  `es_principal` tinyint(1) DEFAULT '0',
  `orden` int DEFAULT '0',
  `fecha_subida` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_foto`),
  UNIQUE KEY `id_foto` (`id_foto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `log_frontend` (
  `id_log` bigint NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `nivel` enum('debug','info','warn','error') NOT NULL,
  `mensaje` varchar(1000) NOT NULL,
  `contexto` json DEFAULT NULL,
  `url` varchar(500) NOT NULL,
  `user_agent` varchar(500) NOT NULL,
  `sesion_id` varchar(50) NOT NULL,
  `fecha` datetime NOT NULL,
  `creado_en` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_log`),
  KEY `idx_log_fecha` (`fecha`),
  KEY `idx_log_nivel` (`nivel`),
  KEY `idx_log_usuario` (`id_usuario`),
  CONSTRAINT `fk_log_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logs_tecnicos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nivel` varchar(20) NOT NULL,
  `modulo` varchar(255) NOT NULL,
  `mensaje` text NOT NULL,
  `request_id` varchar(100) DEFAULT NULL,
  `metodo_http` varchar(10) DEFAULT NULL,
  `ruta` varchar(500) DEFAULT NULL,
  `estado_http` smallint DEFAULT NULL,
  `duracion_ms` decimal(12,2) DEFAULT NULL,
  `excepcion` text,
  `fecha_hora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_logs_tecnicos_fecha` (`fecha_hora`),
  KEY `idx_logs_tecnicos_nivel` (`nivel`),
  KEY `idx_logs_tecnicos_request` (`request_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensaje` (
  `id_mensaje` int NOT NULL AUTO_INCREMENT,
  `conversacion_id_conversacion` int NOT NULL,
  `usuario_id_usuario` int NOT NULL,
  `contenido` text NOT NULL,
  `fecha_envio` datetime NOT NULL,
  `estado_lectura` varchar(30) NOT NULL,
  PRIMARY KEY (`id_mensaje`),
  KEY `fk_mensaje_conversacion` (`conversacion_id_conversacion`),
  KEY `fk_mensaje_usuario` (`usuario_id_usuario`),
  CONSTRAINT `fk_mensaje_conversacion` FOREIGN KEY (`conversacion_id_conversacion`) REFERENCES `conversacion` (`id_conversacion`),
  CONSTRAINT `fk_mensaje_usuario` FOREIGN KEY (`usuario_id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedigri` (
  `id_pedigri` int NOT NULL AUTO_INCREMENT,
  `informacion_documento` text,
  `estado_verificacion` varchar(30) NOT NULL,
  `comentario` text,
  `caballo_id_caballo` int NOT NULL,
  PRIMARY KEY (`id_pedigri`),
  KEY `fk_pedigri_caballo` (`caballo_id_caballo`),
  CONSTRAINT `fk_pedigri_caballo` FOREIGN KEY (`caballo_id_caballo`) REFERENCES `caballo` (`id_caballo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publicacion` (
  `id_publicacion` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(180) NOT NULL,
  `descripcion` text,
  `fecha_publicacion` date NOT NULL,
  `estado` varchar(30) NOT NULL,
  `precio_referencia` decimal(12,2) DEFAULT NULL,
  `caballo_id_caballo` int NOT NULL,
  `usuario_id_usuario` int NOT NULL,
  PRIMARY KEY (`id_publicacion`),
  KEY `fk_publicacion_caballo` (`caballo_id_caballo`),
  KEY `fk_publicacion_usuario` (`usuario_id_usuario`),
  CONSTRAINT `fk_publicacion_caballo` FOREIGN KEY (`caballo_id_caballo`) REFERENCES `caballo` (`id_caballo`),
  CONSTRAINT `fk_publicacion_usuario` FOREIGN KEY (`usuario_id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `raza` (
  `id_raza` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text,
  PRIMARY KEY (`id_raza`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resena` (
  `id_resena` int NOT NULL AUTO_INCREMENT,
  `calificacion` decimal(2,1) NOT NULL,
  `comentario` text,
  `fecha` date NOT NULL,
  `id_usuario_evaluado` int NOT NULL,
  `id_usuario_evaluador` int NOT NULL,
  `conversacion_id_conversacion` int NOT NULL,
  PRIMARY KEY (`id_resena`),
  UNIQUE KEY `uq_resena_conversacion_evaluador` (`conversacion_id_conversacion`,`id_usuario_evaluador`),
  KEY `fk_resena_usuario_evaluado` (`id_usuario_evaluado`),
  KEY `fk_resena_usuario_evaluador` (`id_usuario_evaluador`),
  CONSTRAINT `fk_resena_conversacion` FOREIGN KEY (`conversacion_id_conversacion`) REFERENCES `conversacion` (`id_conversacion`),
  CONSTRAINT `fk_resena_usuario_evaluado` FOREIGN KEY (`id_usuario_evaluado`) REFERENCES `usuario` (`id_usuario`),
  CONSTRAINT `fk_resena_usuario_evaluador` FOREIGN KEY (`id_usuario_evaluador`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resultadocompatibilidad` (
  `id_resultado` int NOT NULL AUTO_INCREMENT,
  `puntuacion` decimal(5,2) NOT NULL,
  `ubicacion_puntos` decimal(5,2) DEFAULT NULL,
  `raza_puntos` decimal(5,2) DEFAULT NULL,
  `madurez_puntos` decimal(5,2) DEFAULT NULL,
  `altura_puntos` decimal(5,2) DEFAULT NULL,
  `otros_puntos` decimal(5,2) DEFAULT NULL,
  `solicitudcompatibilidad_id_solicitud` int NOT NULL,
  `caballo_id_caballo` int NOT NULL,
  `nivel_confianza` varchar(10) DEFAULT NULL,
  `resumen_cria` text,
  PRIMARY KEY (`id_resultado`),
  KEY `fk_resultado_solicitud` (`solicitudcompatibilidad_id_solicitud`),
  KEY `fk_resultado_caballo` (`caballo_id_caballo`),
  CONSTRAINT `fk_resultado_caballo` FOREIGN KEY (`caballo_id_caballo`) REFERENCES `caballo` (`id_caballo`),
  CONSTRAINT `fk_resultado_solicitud` FOREIGN KEY (`solicitudcompatibilidad_id_solicitud`) REFERENCES `solicitudcompatibilidad` (`id_solicitud`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `id_rol` int NOT NULL AUTO_INCREMENT,
  `nombre_rol` varchar(80) NOT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `solicitudcompatibilidad` (
  `id_solicitud` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `resultado` text,
  `usuario_id_usuario` int NOT NULL,
  `caballo_id_caballo` int NOT NULL,
  `yegua_id_caballo` int DEFAULT NULL,
  `huella_datos` char(64) DEFAULT NULL,
  `modelo` varchar(80) DEFAULT NULL,
  `creado_en` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_solicitud`),
  KEY `fk_solicitud_usuario` (`usuario_id_usuario`),
  KEY `fk_solicitud_caballo` (`caballo_id_caballo`),
  KEY `idx_solicitud_par` (`caballo_id_caballo`,`yegua_id_caballo`,`huella_datos`),
  KEY `idx_solicitud_usuario_fecha` (`usuario_id_usuario`,`creado_en`),
  KEY `fk_solicitud_yegua` (`yegua_id_caballo`),
  CONSTRAINT `fk_solicitud_caballo` FOREIGN KEY (`caballo_id_caballo`) REFERENCES `caballo` (`id_caballo`),
  CONSTRAINT `fk_solicitud_usuario` FOREIGN KEY (`usuario_id_usuario`) REFERENCES `usuario` (`id_usuario`),
  CONSTRAINT `fk_solicitud_yegua` FOREIGN KEY (`yegua_id_caballo`) REFERENCES `caballo` (`id_caballo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(120) NOT NULL,
  `correo` varchar(180) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `telefono` varchar(30) DEFAULT NULL,
  `ubicacion` varchar(180) DEFAULT NULL,
  `fecha_registro` date NOT NULL,
  `estado` varchar(30) NOT NULL,
  `rol_id_rol` int NOT NULL,
  `ubicacion_lat` decimal(10,8) DEFAULT NULL,
  `ubicacion_lng` decimal(11,8) DEFAULT NULL,
  `ubicacion_texto` varchar(255) DEFAULT NULL,
  `ciudad` varchar(120) DEFAULT NULL,
  `departamento` varchar(120) DEFAULT NULL,
  `foto_perfil` varchar(500) DEFAULT NULL,
  `ultima_conexion` datetime DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `correo` (`correo`),
  KEY `fk_usuario_rol` (`rol_id_rol`),
  CONSTRAINT `fk_usuario_rol` FOREIGN KEY (`rol_id_rol`) REFERENCES `rol` (`id_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_google` (
  `id_usuario_google` int NOT NULL AUTO_INCREMENT,
  `usuario_id_usuario` int NOT NULL,
  `google_sub` varchar(255) NOT NULL,
  PRIMARY KEY (`id_usuario_google`),
  UNIQUE KEY `google_sub` (`google_sub`),
  KEY `usuario_id_usuario` (`usuario_id_usuario`),
  CONSTRAINT `usuario_google_ibfk_1` FOREIGN KEY (`usuario_id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `verificacion_correo` (
  `id_verificacion` int NOT NULL AUTO_INCREMENT,
  `usuario_id_usuario` int NOT NULL,
  `codigo_hash` varchar(255) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `fecha_expiracion` datetime NOT NULL,
  `usado` tinyint(1) NOT NULL DEFAULT '0',
  `intentos` int NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_verificacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SET FOREIGN_KEY_CHECKS = 1;
