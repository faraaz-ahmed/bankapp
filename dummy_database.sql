-- MySQL dump 10.16  Distrib 10.2.25-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: bank
-- ------------------------------------------------------
-- Server version	10.2.25-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accounts` (
  `ano` int(11) NOT NULL,
  `atype` varchar(255) DEFAULT NULL,
  `balance` bigint(20) NOT NULL,
  `uid` int(11) DEFAULT NULL,
  PRIMARY KEY (`ano`),
  KEY `FKf6e5imo8c34mmpbj58fi4dbdq` (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (3,'savings',5441,NULL),(4,'savings',6259,2),(11,'Savings Account',5300,10),(12,'Current Account',5000,10),(14,NULL,5000,13),(16,'Current Account',5000,15),(18,'Current Account',5000,17),(20,NULL,5000,19),(22,NULL,5000,21),(24,'Savings Account',5000,23);
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers` (
  `uid` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `flag` bit(1) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `occupation` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `pno` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (10,'Hyd','hash@gmail.com','','abrar','Engineer','abrar','000','abrar'),(2,'malakpet','hash@gmail.com','\0','zain','engineer','zain','245456','akhil'),(13,'','','\0','','','','',''),(15,'real','hashmiabrar14@gmail.com','\0','ronaldo','Engineer','as','000','ronaldo'),(17,'masab tank','hash@gmail.com','\0','vedic','eng','vedic','789','vedic'),(19,'','','\0','','','','',''),(21,'','','\0','','','','',''),(23,'has@gmail.com','has@gmail.com','\0','Sonu','Engineer','vedic','000','user');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (42),(42),(42);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transactions` (
  `tid` int(11) NOT NULL,
  `amount` bigint(20) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `flag` int(11) NOT NULL,
  `fromacc` int(11) NOT NULL,
  `frombal` bigint(20) NOT NULL,
  `toacc` int(11) NOT NULL,
  `tobal` bigint(20) NOT NULL,
  `ts` datetime DEFAULT NULL,
  PRIMARY KEY (`tid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (6,500,'2019-08-22',0,3,6500,4,5500,'2019-08-22 10:24:50'),(7,400,'2019-08-23',0,3,6100,4,5900,'2019-08-23 00:00:00'),(8,100,'2019-08-24',0,4,5800,3,6200,'2019-08-24 10:24:50'),(9,100,'2019-08-24',0,4,5700,3,6300,'2019-08-24 10:49:26'),(25,100,'2019-08-27',0,3,6200,4,5800,'2019-08-27 21:55:53'),(26,456,'2019-08-27',0,3,5744,4,6256,'2019-08-27 21:58:23'),(27,100,'2019-08-28',0,3,5644,4,6356,'2019-08-28 11:06:24'),(28,234,'2019-08-28',0,3,5410,4,6590,'2019-08-28 11:09:02'),(29,100,'2019-08-28',0,3,5310,11,5100,'2019-08-28 15:35:57'),(30,100,'2019-08-28',0,3,5210,11,5200,'2019-08-28 15:35:59'),(31,100,'2019-08-28',0,3,5110,11,5300,'2019-08-28 15:36:00'),(32,150,'2019-08-28',0,4,6590,4,6590,'2019-08-28 18:29:02'),(33,150,'2019-08-28',0,4,6590,4,6590,'2019-08-28 18:29:04'),(34,150,'2019-08-28',0,4,6590,4,6590,'2019-08-28 18:29:06'),(35,150,'2019-08-28',0,4,6440,3,5260,'2019-08-28 18:35:14'),(36,150,'2019-08-28',0,4,6290,3,5410,'2019-08-28 18:35:15'),(37,200,'2019-08-28',0,4,6090,3,5610,'2019-08-28 18:36:02'),(38,200,'2019-08-28',0,4,5890,3,5810,'2019-08-28 18:36:04'),(39,123,'28-08-2019',0,3,5687,4,6013,'2019-08-28 21:57:43'),(40,123,'28-08-2019',0,3,5564,4,6136,'2019-08-28 21:58:05'),(41,123,'28-08-2019',0,3,5441,4,6259,'2019-08-28 21:58:06');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-30  8:59:41
