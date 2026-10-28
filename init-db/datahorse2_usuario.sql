-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: localhost    Database: datahorse2
-- ------------------------------------------------------
-- Server version	8.0.45

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
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
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `correo` (`correo`),
  KEY `fk_usuario_rol` (`rol_id_rol`),
  CONSTRAINT `fk_usuario_rol` FOREIGN KEY (`rol_id_rol`) REFERENCES `rol` (`id_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'David','prueba2@correo.com','$argon2id$v=19$m=65536,t=3,p=4$ydW9kXdtFR2oDeC5OS3O6w$yl8CgzBIm+cmPtlNEjOO611Jt0qTeNHz0X6yOaMCTTE',NULL,NULL,'2026-09-24','activo',2,NULL,NULL,NULL,NULL,NULL),(2,'David Manuel','independencia0725@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$+ON+KOXGeso2utdEzqAxlg$Q7EfVuLYC+GbY5bsTL1VCBD0ZaeRNqUxLsU+/JGsr/8','3016075711','Fusagasuga, Cundinamarca','2026-09-24','activo',2,4.34495090,-74.36742490,'Fusagasugá, Sumapaz, Cundinamarca, RAP (Especial) Central, Colombia','Fusagasugá','Cundinamarca'),(3,'Ana','ana@correo.com','$argon2id$v=19$m=65536,t=3,p=4$p4YF50mVBIaJWnb2TI/EGg$f27AzvOigLzuT6AVnhOzdgO6hl6lW1lwUcwVqEmI9KM',NULL,NULL,'2026-09-25','activo',2,NULL,NULL,NULL,NULL,NULL),(4,'Ana','ana3@correo.com','$argon2id$v=19$m=65536,t=3,p=4$+B2/MEf3ag54qR+zNjjVAA$mwkLEHgNFu8hT3WiCDlVlNhfu58gZ5vMowCfgZ9QSSg',NULL,NULL,'2026-09-25','activo',2,NULL,NULL,NULL,NULL,NULL),(5,'Manuel','example@correo.com','$argon2id$v=19$m=65536,t=3,p=4$z7moCnriMLe0gVlmP1dxzQ$w18H/IGeQOIAeWnDCdT9RY785gAux2KtZI0Dg1JYbUI','123456789','j','2026-09-25','activo',2,-30.70543630,-69.19882220,'San Juan, Argentina','j','San Juan'),(6,'ghfrawq','tgrfw@gfds.com','$argon2id$v=19$m=65536,t=3,p=4$sYXPbn4hO18GpO1hLHppcg$0+CUoE11H6wvD3z2Cmx/h/dcmIbbcYOEwMpw+ivKboM','5216354123','drs','2026-09-26','activo',2,36.76747640,2.99095420,'Département du Renseignement et de la Sécurité (DRS), Dely Brahim, Daïra de Chéraga, Argel, 16000, Argelia','Daïra de Chéraga','Argel'),(7,'ghfrawq','tgrfdfsfw@gfds.com','$argon2id$v=19$m=65536,t=3,p=4$rtUoTKwD2sWgoU2akvub4A$g4k3qIKSnHQ097suHkSIV6dvopiprI2QFcUeL/A511E','5641312651','drs','2026-09-26','activo',2,36.76747640,2.99095420,'Département du Renseignement et de la Sécurité (DRS), Dely Brahim, Daïra de Chéraga, Argel, 16000, Argelia','Daïra de Chéraga','Argel'),(8,'Manuel','example2@correo.com','$argon2id$v=19$m=65536,t=3,p=4$5By7LUELFfarVHbRKiFxzQ$98zZfddqvoXRXFmmdYs32rGiyEAFh/lv9T06RRbGTRo','1234567','Fusagasuga, Cundinamarca','2026-09-28','activo',2,4.34495090,-74.36742490,'Fusagasugá, Sumapaz, Cundinamarca, RAP (Especial) Central, Colombia','Fusagasugá','Cundinamarca'),(9,'David Sanchez','davidmisionero25@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$e9d1Cgd8sGI8SHl5AKXX8Q$s55aejZHSuwY5SpbI7UhFfWIs+9jBaC94BU4vJuj4cE','+573016075711','Fusagasuga, Cundinamarca','2026-09-28','activo',2,4.34495090,-74.36742490,'Fusagasugá, Sumapaz, Cundinamarca, RAP (Especial) Central, Colombia','Fusagasugá','Cundinamarca'),(10,'ejemplo','user@example.com','$argon2id$v=19$m=65536,t=3,p=4$HPreTFXkiBUkeP6Km4g/Og$m5nTwnW8rr9k+a4ReOulnto1GKU1P79TBhi9JehDltE','123456789','string','2026-09-30','activo',2,52.19612460,-8.39395910,'String, Glanworth West, The Municipal District of Fermoy, Condado de Cork, Munster, Irlanda','The Municipal District of Fermoy','Sin departamento'),(11,'David Sanchez','example3@correo.com','$argon2id$v=19$m=65536,t=3,p=4$PkubOcHQPUb5GVLCJOjsSw$Kw4BN54VDxxZv1E5WaKrIUtFbEmbM1HnqJQbJHCBpZc','+573016075711','Fusagasuga, Cundinamarca','2026-10-06','activo',2,4.34495090,-74.36742490,'Fusagasugá, Sumapaz, Cundinamarca, RAP (Especial) Central, Colombia','Fusagasugá','Cundinamarca'),(12,'David Sanchez','example4@correo.com','$argon2id$v=19$m=65536,t=3,p=4$wIo3N5ksyubtCRnKg433+Q$W6WrIxwD+sVuuW11F0vXHBF4tIgrhTWHB0ONz+uact8','+573016075711','Fusagasuga, Cundinamarca','2026-10-11','pendiente',2,4.34495090,-74.36742490,'Fusagasugá, Sumapaz, Cundinamarca, RAP (Especial) Central, Colombia','Fusagasugá','Cundinamarca'),(13,'David Sanchez','example5@correo.com','$argon2id$v=19$m=65536,t=3,p=4$eZIARp8YlWbOZ3vtCNiW5g$sbOKr5G/fviKOIapaElA/GQMoDPSLyzywJ1Ur8FEg5A','+573016075711','Fusagasuga, Cundinamarca','2026-10-19','pendiente',2,4.34495090,-74.36742490,'Fusagasugá, Sumapaz, Cundinamarca, RAP (Especial) Central, Colombia','Fusagasugá','Cundinamarca'),(14,'Data Horse','datahorse3@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$24vgUuSlUIRzb54DutD6KA$O0a9lminR+fSdyoyT6eLYzLfc/xi1fts8hdMRhUMMWE',NULL,NULL,'2026-10-20','activo',2,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-10-26 23:39:05
