CREATE DATABASE IF NOT EXISTS kanban;

USE kanban;

CREATE TABLE IF NOT EXISTS `usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_usuario_UNIQUE` (`id` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `tarefa` (
  `id_tarefa` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NULL,
  `descricao` VARCHAR(45) NULL,
  `nome_setor` VARCHAR(30) NULL,
  `prioridade` ENUM("Baixa", "Média", "Alta") NULL,
  `data_cadastro` DATE NOT NULL,
  `status` ENUM("A Fazer", "Fazendo", "Pronto") NULL DEFAULT 'A Fazer',
  PRIMARY KEY (`id_tarefa`),
  UNIQUE INDEX `id_tarefa_UNIQUE` (`id_tarefa` ASC),
  CONSTRAINT `fk_usuario_tarefa`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;