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
-- Table structure for table `compatibilidad_razas`
--

DROP TABLE IF EXISTS `compatibilidad_razas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
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
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compatibilidad_razas`
--

LOCK TABLES `compatibilidad_razas` WRITE;
/*!40000 ALTER TABLE `compatibilidad_razas` DISABLE KEYS */;
INSERT INTO `compatibilidad_razas` VALUES (1,1,1,100.00),(2,1,2,85.00),(3,1,3,90.00),(4,1,4,85.00),(5,1,5,90.00),(6,1,6,70.00),(7,1,7,90.00),(8,1,8,60.00),(9,1,9,85.00),(10,1,10,95.00),(11,2,1,85.00),(12,2,2,100.00),(13,2,3,90.00),(14,2,4,90.00),(15,2,5,85.00),(16,2,6,75.00),(17,2,7,70.00),(18,2,8,55.00),(19,2,9,80.00),(20,2,10,80.00),(21,3,1,90.00),(22,3,2,90.00),(23,3,3,100.00),(24,3,4,90.00),(25,3,5,90.00),(26,3,6,75.00),(27,3,7,85.00),(28,3,8,60.00),(29,3,9,95.00),(30,3,10,90.00),(31,4,1,85.00),(32,4,2,90.00),(33,4,3,90.00),(34,4,4,100.00),(35,4,5,95.00),(36,4,6,85.00),(37,4,7,80.00),(38,4,8,55.00),(39,4,9,90.00),(40,4,10,85.00),(41,5,1,90.00),(42,5,2,85.00),(43,5,3,90.00),(44,5,4,95.00),(45,5,5,100.00),(46,5,6,95.00),(47,5,7,80.00),(48,5,8,65.00),(49,5,9,85.00),(50,5,10,80.00),(51,6,1,70.00),(52,6,2,75.00),(53,6,3,75.00),(54,6,4,85.00),(55,6,5,95.00),(56,6,6,100.00),(57,6,7,70.00),(58,6,8,75.00),(59,6,9,75.00),(60,6,10,70.00),(61,7,1,90.00),(62,7,2,70.00),(63,7,3,85.00),(64,7,4,80.00),(65,7,5,80.00),(66,7,6,70.00),(67,7,7,100.00),(68,7,8,50.00),(69,7,9,75.00),(70,7,10,85.00),(71,8,1,60.00),(72,8,2,55.00),(73,8,3,60.00),(74,8,4,55.00),(75,8,5,65.00),(76,8,6,75.00),(77,8,7,50.00),(78,8,8,100.00),(79,8,9,55.00),(80,8,10,55.00),(81,9,1,85.00),(82,9,2,80.00),(83,9,3,95.00),(84,9,4,90.00),(85,9,5,85.00),(86,9,6,75.00),(87,9,7,75.00),(88,9,8,55.00),(89,9,9,100.00),(90,9,10,90.00),(91,10,1,95.00),(92,10,2,80.00),(93,10,3,90.00),(94,10,4,85.00),(95,10,5,80.00),(96,10,6,70.00),(97,10,7,85.00),(98,10,8,55.00),(99,10,9,90.00),(100,10,10,100.00);
/*!40000 ALTER TABLE `compatibilidad_razas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-10-26 23:39:08
