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
-- Table structure for table `caballo`
--

DROP TABLE IF EXISTS `caballo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caballo`
--

LOCK TABLES `caballo` WRITE;
/*!40000 ALTER TABLE `caballo` DISABLE KEYS */;
INSERT INTO `caballo` VALUES (1,'Relampago','Macho','2026-09-03',1.70,'negro','Medellin','DEMO','Disponible',10,2,6.26973240,-75.60255970,'Medellín, Valle de Aburrá, Antioquia, RAP del Agua y la Montaña, 0500, Colombia','Medellín','Antioquia'),(2,'Luis','Macho','2026-09-03',1.00,'Naranja','Arbelaez','DEMO','Disponible',5,2,4.27267980,-74.41382170,'Arbeláez, Arbeláez ciudad, Sumapaz, Cundinamarca, RAP (Especial) Central, Colombia','Arbeláez','Cundinamarca'),(3,'Maik','Macho','2024-02-26',1.50,'Azabache','Villavicencio','DEMO','Disponible',2,2,4.11145950,-73.49678360,'Villavicencio, Meta, RAP (Especial) Central, Colombia','Villavicencio','Meta'),(4,'Alejandro','Macho','2025-06-26',1.00,'Blanco','San Bernardo','DEMO','Eliminado',6,2,NULL,NULL,'San Bernardo','San Bernardo','Pendiente'),(5,'Fernando','Macho','2024-06-12',1.30,'Blanco','Venecia','DEMO','Eliminado',4,2,NULL,NULL,'Venecia','Venecia','Pendiente'),(6,'Daniel','Macho','2025-06-18',1.60,'Azabache','Icononzo','DEMO','Eliminado',7,2,NULL,NULL,'Icononzo','Icononzo','Pendiente'),(7,'luna','Hembra','2025-06-20',1.50,'blanco','soacha','DEMO','Disponible',4,2,4.58268860,-74.21177810,'Soacha, Cundinamarca, RAP (Especial) Central, 25, Colombia','Soacha','Cundinamarca'),(8,'Sara','Hembra','2023-03-09',1.30,'rojo','tocancipa','DEMO','Disponible',3,2,4.97371000,-73.92117980,'Tocancipá, Sabana Centro, Cundinamarca, RAP (Especial) Central, Colombia','Tocancipá','Cundinamarca'),(9,'Fabian','Macho','2016-02-25',1.50,'Rojo','Fusagasuga','DEMO','Disponible',8,2,4.34495090,-74.36742490,'Fusagasugá, Sumapaz, Cundinamarca, RAP (Especial) Central, Colombia','Fusagasugá','Cundinamarca'),(10,'Juan','Macho','2022-01-06',1.30,'Azabache','Cali','DEMO','Disponible',1,2,3.41084350,-76.58121270,'Cali, Sur, Valle del Cauca, RAP Pacífico, Colombia','Cali','Valle del Cauca');
/*!40000 ALTER TABLE `caballo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-10-26 23:39:07
