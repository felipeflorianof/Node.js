CREATE DATABASE  IF NOT EXISTS `node` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `node`;
-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: node
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

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
-- Table structure for table `postagens`
--

DROP TABLE IF EXISTS `postagens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `postagens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) DEFAULT NULL,
  `conteudo` text DEFAULT NULL,
  `autor` text DEFAULT NULL,
  `isbn` bigint(20) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postagens`
--

LOCK TABLES `postagens` WRITE;
/*!40000 ALTER TABLE `postagens` DISABLE KEYS */;
INSERT INTO `postagens` VALUES (12,'O Alquimista','Combinando espiritualidade, sabedoria e misticismo, O alquimista é uma inspiradora e emocionante história de autodescoberta que vem transformando a vida de milhões de leitores ao redor do mundo há mais de trinta anos.\r\nSantiago, um jovem pastor da Andaluzia, parte rumo ao Egito em busca de um tesouro escondido entre as Pirâmides. O que ele não sabe é que sua jornada o levará a riquezas muito diferentes – e mais satisfatórias – do que ele estava esperando. Ao longo do caminho, uma cigana, um homem que se diz rei e um alquimista lhe indicam a direção em que deve seguir e o ajudam a perceber que o maior tesouro se encontra dentro dele mesmo.\r\nCom a prosa poética de Paulo Coelho, este romance encantador nos recorda da sabedoria de ouvir nossos corações, reconhecer as oportunidades da vida e, mais importante, sempre seguir nossos sonhos.','Paulo Coelho',86786974532,'2022-11-25 15:58:02','2022-11-25 16:02:05'),(13,'O Príncipe','Nesta obra, que é um clássico sobre pensamento político, o grande escritor Maquiavel mostra como funciona a ciência política.\r\n\r\nDiscorre sobre os diferentes tipos de Estado e ensina como um príncipe pode conquistar e manter o domínio sobre um Estado.\r\n\r\nTrata daquilo que é o seu objetivo principal: as virtudes que o governante deve adquirir e os vícios que deve evitar para manter-se no poder.\r\n\r\nMaquiavel mostra em O Príncipe que a moralidade e a ciência política são separadas.\r\n\r\nEle aponta a contradição entre governar um Estado e, ao mesmo tempo, levar uma vida moral.','Nicolau Maquiavel',9869780453,'2022-11-25 16:01:22','2022-11-25 16:01:22');
/*!40000 ALTER TABLE `postagens` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-25 13:14:41
