-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema TiendaCompus
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema TiendaCompus
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `TiendaCompus` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `TiendaCompus` ;

-- -----------------------------------------------------
-- Table `TiendaCompus`.`apple`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TiendaCompus`.`apple` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `disco duro` VARCHAR(50) NOT NULL,
  `memoria ram` VARCHAR(20) NOT NULL,
  `procesador` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `TiendaCompus`.`dell`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `TiendaCompus`.`dell` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `disco duro` VARCHAR(50) NOT NULL,
  `memoria ram` VARCHAR(20) NOT NULL,
  `procesador` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
