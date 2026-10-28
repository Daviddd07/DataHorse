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
-- Table structure for table `foto_caballo`
--

DROP TABLE IF EXISTS `foto_caballo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foto_caballo`
--

LOCK TABLES `foto_caballo` WRITE;
/*!40000 ALTER TABLE `foto_caballo` DISABLE KEYS */;
INSERT INTO `foto_caballo` VALUES (1,1,'uploads/caballos/74518eb9beb64625affd36e462b95f4c.jpg',1,0,'2026-09-27 01:07:41'),(2,2,'uploads/caballos/c6fe233d62274801b53406adbe9b2c54.jpg',1,0,'2026-09-27 01:08:43'),(3,3,'uploads/caballos/f7315064992447e7a50959b8977e6b6c.jpg',1,0,'2026-09-27 01:09:47'),(4,4,'uploads/caballos/92d97d2bb80e486f8a16ff77bcd4e1e9.jpg',1,0,'2026-09-27 01:11:19'),(5,5,'uploads/caballos/ac89499457dd48c8ae62c9fd830feb68.jpg',1,0,'2026-09-27 19:58:47'),(6,6,'uploads/caballos/ed6045eb7b28472598b1993a592eb8f1.jpg',1,0,'2026-09-27 20:02:28'),(7,6,'uploads/caballos/296b60140493445e8bb1557e01bfc844.jpg',0,1,'2026-09-27 20:02:28'),(9,7,'uploads/caballos/e1ec9b08cb734a13ba06af72dfca9d6d.jpg',1,0,'2026-10-06 16:11:40'),(10,7,'uploads/caballos/305f8f816a7b40caadcbe5068a021d9f.jpg',0,0,'2026-10-11 22:01:30'),(11,8,'uploads/caballos/9b1ccb1315cc49669734a20e6dad0305.jpg',1,0,'2026-10-12 01:04:42'),(12,9,'uploads/caballos/9f2f685123fb40ae9d1b18c33a788a25.jpg',1,0,'2026-10-12 21:17:05'),(13,10,'uploads/caballos/d5b8a16ba6e8488f96a52a03854eb566.jpg',1,0,'2026-10-21 00:20:46');
/*!40000 ALTER TABLE `foto_caballo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-10-26 23:39:06
