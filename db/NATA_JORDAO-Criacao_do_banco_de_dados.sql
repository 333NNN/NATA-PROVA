CREATE DATABASE IF NOT EXISTS kanban;

USE kanban;

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(30) NOT NULL UNIQUE,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `tarefa` (
    `id_tarefa` INT NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(45),
    `nome_setor` VARCHAR(30),
    `prioridade` ENUM('Baixa', 'Média', 'Alta'),
    `data_cadastro` DATE NOT NULL,
    `status` ENUM('A Fazer', 'Fazendo', 'Pronto') DEFAULT 'A Fazer',
    `usuario_id` INT NOT NULL,
    PRIMARY KEY (`id_tarefa`),
    UNIQUE INDEX `id_tarefa_UNIQUE` (`id_tarefa` ASC),
    INDEX `fk_tarefa_usuario_idx` (`usuario_id` ASC),
    CONSTRAINT `fk_tarefa_usuario` FOREIGN KEY (`usuario_id`)
        REFERENCES `usuarios` (`id_usuario`)
        ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB;




