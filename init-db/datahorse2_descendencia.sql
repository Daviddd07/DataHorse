-- Descendencia (genealogía y aptitudes) de cada caballo o yegua. Todos los campos son opcionales:
-- muchos usuarios no tienen la información completa. La usa la evaluación de compatibilidad.
-- La tabla caballo se crea en otro script; se desactiva la verificación de FK como en los demás.
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;

CREATE TABLE IF NOT EXISTS descendencia (
  id_descendencia           INT AUTO_INCREMENT PRIMARY KEY,
  caballo_id_caballo        INT NOT NULL,

  -- Padre y madre
  padre_nombre              VARCHAR(120) NULL,
  padre_raza                VARCHAR(120) NULL,
  padre_registro            VARCHAR(60)  NULL,
  padre_logros              VARCHAR(500) NULL,
  madre_nombre              VARCHAR(120) NULL,
  madre_raza                VARCHAR(120) NULL,
  madre_registro            VARCHAR(60)  NULL,
  madre_logros              VARCHAR(500) NULL,

  -- Abuelos
  abuelo_paterno_nombre     VARCHAR(120) NULL,
  abuelo_paterno_raza       VARCHAR(120) NULL,
  abuela_paterna_nombre     VARCHAR(120) NULL,
  abuela_paterna_raza       VARCHAR(120) NULL,
  abuelo_materno_nombre     VARCHAR(120) NULL,
  abuelo_materno_raza       VARCHAR(120) NULL,
  abuela_materna_nombre     VARCHAR(120) NULL,
  abuela_materna_raza       VARCHAR(120) NULL,

  -- Registro
  asociacion_registro       VARCHAR(150) NULL,
  criadero_origen           VARCHAR(150) NULL,

  -- Aptitudes
  modalidad                 VARCHAR(60)  NULL,
  temperamento              VARCHAR(60)  NULL,

  -- Salud
  condiciones_hereditarias  TEXT NULL,
  pruebas_geneticas         TEXT NULL,

  -- Crías anteriores
  crias_anteriores          SMALLINT UNSIGNED NULL,
  caracteristicas_crias     TEXT NULL,

  notas                     TEXT NULL,

  -- Permite saber si una evaluación de compatibilidad guardada sigue vigente
  fecha_actualizacion       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  UNIQUE KEY uq_descendencia_caballo (caballo_id_caballo),
  CONSTRAINT fk_descendencia_caballo FOREIGN KEY (caballo_id_caballo)
    REFERENCES caballo (id_caballo) ON DELETE CASCADE
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_0900_ai_ci;

-- ======================================================
-- Datos de demostración para los caballos de datahorse2_caballo.sql.
-- Algunos campos quedan vacíos a propósito para probar evaluaciones con información incompleta.
-- ======================================================
INSERT IGNORE INTO descendencia (
  caballo_id_caballo,
  padre_nombre, padre_raza, padre_registro, padre_logros,
  madre_nombre, madre_raza, madre_registro, madre_logros,
  abuelo_paterno_nombre, abuelo_paterno_raza, abuela_paterna_nombre, abuela_paterna_raza,
  abuelo_materno_nombre, abuelo_materno_raza, abuela_materna_nombre, abuela_materna_raza,
  asociacion_registro, criadero_origen, modalidad, temperamento,
  condiciones_hereditarias, pruebas_geneticas, crias_anteriores, caracteristicas_crias, notas
) VALUES
-- 1. Relampago (Mustang, macho, potro)
(1,
 'Viento Salvaje', 'Mustang', NULL, 'Semental de manada, gran resistencia',
 'Duna', 'Mustang', NULL, NULL,
 NULL, NULL, NULL, NULL,
 NULL, NULL, NULL, NULL,
 NULL, 'Rancho Los Llanos', 'Trabajo de campo', 'Activo',
 NULL, NULL, 0, NULL,
 'Potro muy joven, aún no apto para reproducción.'),
-- 2. Luis (Andaluz, macho, potro)
(2,
 'Gitano XV', 'Andaluz', 'PRE-2015-3381', 'Campeón de morfología en feria regional 2021',
 'Dulcinea', 'Andaluz', 'PRE-2017-1204', NULL,
 'Embajador II', 'Andaluz', NULL, NULL,
 NULL, NULL, 'Macarena', 'Andaluz',
 'Asociación de Criadores de Caballos de Pura Raza Española', 'Yeguada La Giralda', 'Trote y galope', 'Dócil',
 NULL, NULL, 0, NULL,
 NULL),
-- 3. Maik (Pura Sangre de Carrera, macho)
(3,
 'Rayo de Oro', 'Pura Sangre de Carrera', 'PSC-2017-0452', 'Ganador del Clásico Nacional 2020 (1.600 m)',
 'Estrella Fugaz', 'Pura Sangre de Carrera', 'PSC-2016-0918', 'Tercer lugar Gran Premio 2019',
 'Trueno Veloz', 'Pura Sangre de Carrera', 'Brisa Marina', 'Pura Sangre de Carrera',
 'Halcón Negro', 'Pura Sangre de Carrera', 'Aurora', 'Pura Sangre de Carrera',
 'Stud Book de Colombia', 'Haras El Rosal', 'Carreras', 'Activo',
 'Ninguna conocida', 'Gen de rendimiento MSTN: C:T (aptitud para media distancia)', 0, NULL,
 NULL),
-- 4. Alejandro (Frisón, macho, eliminado)
(4,
 'Tjalbert', 'Frisón', NULL, NULL,
 NULL, NULL, NULL, NULL,
 NULL, NULL, NULL, NULL,
 NULL, NULL, NULL, NULL,
 NULL, NULL, 'Trote y galope', 'Tranquilo',
 NULL, NULL, NULL, NULL,
 NULL),
-- 5. Fernando (Árabe, macho, eliminado)
(5,
 'Shaman Al Sahra', 'Árabe', 'AR-2012-0077', NULL,
 'Nadira', 'Árabe', NULL, NULL,
 NULL, NULL, NULL, NULL,
 NULL, NULL, NULL, NULL,
 'Asociación Colombiana de Criadores de Caballos Árabes', NULL, 'Galope', 'Activo',
 NULL, NULL, 1, 'Potranca gris de buena estructura',
 NULL),
-- 6. Daniel (Paso Fino, macho, eliminado)
(6,
 'Resorte IV', 'Paso Fino', 'FED-2010-5521', 'Campeón nacional de paso fino 2018',
 'Coqueta', 'Paso Fino', NULL, NULL,
 'Resorte III', 'Paso Fino', NULL, NULL,
 NULL, NULL, NULL, NULL,
 'Fedequinas', 'Criadero Santa Bárbara', 'Paso fino colombiano', 'Dócil',
 NULL, NULL, 2, 'Crías con buen brío y paso parejo',
 NULL),
-- 7. luna (Árabe, hembra, potranca)
(7,
 'Sultán del Desierto', 'Árabe', 'AR-2014-0310', 'Campeón de halter 2019',
 'Amira', 'Árabe', 'AR-2016-0145', NULL,
 NULL, NULL, NULL, NULL,
 NULL, NULL, 'Zahra', 'Árabe',
 'Asociación Colombiana de Criadores de Caballos Árabes', 'Criadero Al Andalus', 'Galope', 'Dócil',
 NULL, NULL, 0, NULL,
 'Potranca joven, aún no apta para reproducción.'),
-- 8. Sara (Cuarto de Milla, hembra)
(8,
 'Doc Smart Cowboy', 'Cuarto de Milla', 'AQHA-5874412', 'Campeón de rienda (reining) 2017',
 'Lady Sunshine', 'Cuarto de Milla', 'AQHA-5990137', NULL,
 'Smart Little Lena', 'Cuarto de Milla', 'Dry Doc Lady', 'Cuarto de Milla',
 'Sunny Jack', 'Cuarto de Milla', NULL, NULL,
 'American Quarter Horse Association (AQHA)', 'Rancho La Esperanza', 'Trabajo de campo', 'Tranquilo',
 'Ninguna conocida', 'Panel de 5 enfermedades AQHA negativo (HYPP N/N, HERDA N/N, GBED N/N, PSSM1 N/N, MH N/N)', 1, 'Potro alazán, buen temperamento y musculatura',
 NULL),
-- 9. Fabian (Percherón, macho)
(9,
 'Le Grand Hercule', 'Percherón', 'PHA-2008-2210', 'Campeón de tiro pesado 2012',
 'Belle de Normandie', 'Percherón', NULL, NULL,
 'Titan', 'Percherón', 'Margot', 'Percherón',
 NULL, NULL, NULL, NULL,
 'Percheron Horse Association', 'Granja El Roble', 'Trabajo de campo', 'Tranquilo',
 'Miopatía por almacenamiento de polisacáridos (PSSM1) reportada en la línea paterna', NULL, 4, 'Crías grandes y robustas, buen temperamento para tiro',
 NULL),
-- 10. Juan (Criollo, macho)
(10,
 'Tormenta', 'Criollo', NULL, 'Ganador de cabalgata de resistencia 2019',
 'Paloma', 'Criollo', NULL, NULL,
 NULL, NULL, NULL, NULL,
 NULL, NULL, NULL, NULL,
 NULL, 'Hacienda San Isidro (Antioquia)', 'Trocha', 'Activo',
 NULL, NULL, 0, NULL,
 NULL);

SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
