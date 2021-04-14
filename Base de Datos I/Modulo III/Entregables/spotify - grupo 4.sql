CREATE DATABASE `spotify`;

CREATE TABLE `generos` (
  `id_generos` int NOT NULL,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id_generos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `albumes` (
  `id_albumes` int NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `año_publicacion` date NOT NULL,
  `imagen_portada` varchar(100) NOT NULL,
  `id_artista` int NOT NULL,
  `id_discografia` int NOT NULL,
  PRIMARY KEY (`id_albumes`),
  KEY `id_artista_idx` (`id_artista`),
  KEY `id_disco_albumes_idx` (`id_discografia`),
  CONSTRAINT `id_artista` FOREIGN KEY (`id_artista`) REFERENCES `artista` (`id_artista`),
  CONSTRAINT `id_disco_albumes` FOREIGN KEY (`id_discografia`) REFERENCES `discografia` (`id_discografia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `canciones_generos` (
  `idcanciones_generos` int NOT NULL,
  `id_canciones` int NOT NULL,
  `id_generos` int NOT NULL,
  PRIMARY KEY (`idcanciones_generos`),
  KEY `id_canciones_m_idx` (`id_canciones`),
  KEY `id_generos_m_idx` (`id_generos`),
  CONSTRAINT `id_canciones_m` FOREIGN KEY (`id_canciones`) REFERENCES `canciones` (`id_canciones`),
  CONSTRAINT `id_generos_m` FOREIGN KEY (`id_generos`) REFERENCES `generos` (`id_generos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `playlist_canciones` (
  `id_playlist_canciones` int NOT NULL,
  `id_canciones` int NOT NULL,
  `id_playlist` int NOT NULL,
  PRIMARY KEY (`id_playlist_canciones`),
  KEY `id_canciones_playlist_idx` (`id_canciones`),
  KEY `id_playlist_canciones_idx` (`id_playlist`),
  CONSTRAINT `id_canciones_playlist` FOREIGN KEY (`id_canciones`) REFERENCES `canciones` (`id_canciones`),
  CONSTRAINT `id_playlist_canciones` FOREIGN KEY (`id_playlist`) REFERENCES `playlist` (`id_playlist`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `discografia` (
  `id_discografia` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `pais` varchar(100) NOT NULL,
  PRIMARY KEY (`id_discografia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `artista` (
  `id_artista` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `foto_artista` varchar(100) NOT NULL,
  PRIMARY KEY (`id_artista`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `canciones` (
  `id_canciones` int NOT NULL,
  `duracion` int NOT NULL,
  `reproducciones` int NOT NULL,
  `genero` varchar(45) NOT NULL,
  `likes` int NOT NULL,
  `id_albumes` int NOT NULL,
  PRIMARY KEY (`id_canciones`),
  KEY `id_almbumes_canciones_idx` (`id_albumes`),
  CONSTRAINT `id_almbumes_canciones` FOREIGN KEY (`id_albumes`) REFERENCES `albumes` (`id_albumes`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `playlist` (
  `id_playlist` int NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `numero_canciones` int NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `estado` int NOT NULL,
  `id_usuario` int NOT NULL,
  `fecha_eliminacion` datetime NOT NULL,
  PRIMARY KEY (`id_playlist`),
  KEY `id_usuarios_playlist_idx` (`id_usuario`),
  CONSTRAINT `id_usuarios_playlist` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `password` (
  `idpassword` int NOT NULL,
  `password` varchar(100) NOT NULL,
  `fecha_modificacion` datetime NOT NULL,
  `id_usuario` int NOT NULL,
  PRIMARY KEY (`idpassword`),
  KEY `id_usuario_pass_idx` (`id_usuario`),
  CONSTRAINT `id_usuario_pass` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `suscripcion` (
  `id_suscripcion` int NOT NULL,
  `fecha_inicio` datetime NOT NULL,
  `fecha_renovacion` datetime NOT NULL,
  `id_usuario` int NOT NULL,
  PRIMARY KEY (`id_suscripcion`),
  KEY `id_usuario_sus_idx` (`id_usuario`),
  CONSTRAINT `id_usuario_sus` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `registro_pagos` (
  `id_registro_pagos` int NOT NULL,
  `pagos` varchar(45) NOT NULL,
  `fecha_pagos` varchar(45) NOT NULL,
  `id_suscripcion` int NOT NULL,
  PRIMARY KEY (`id_registro_pagos`),
  KEY `id_suscripcion_regis_idx` (`id_suscripcion`),
  CONSTRAINT `id_suscripcion_regis` FOREIGN KEY (`id_suscripcion`) REFERENCES `suscripcion` (`id_suscripcion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `tarjeta` (
  `id_tarjeta` int NOT NULL,
  `marca` varchar(45) NOT NULL,
  `ultimos_digitos` varchar(4) NOT NULL,
  `fecha_vencimiento` date NOT NULL,
  `id_resgistro_pago` int NOT NULL,
  PRIMARY KEY (`id_tarjeta`),
  KEY `id_resgistro_pago_tarjeta_idx` (`id_resgistro_pago`),
  CONSTRAINT `id_resgistro_pago_tarjeta` FOREIGN KEY (`id_resgistro_pago`) REFERENCES `registro_pagos` (`id_registro_pagos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `transferencia` (
  `id_transferencia` int NOT NULL,
  `CBU` varchar(45) DEFAULT NULL,
  `alias` varchar(45) DEFAULT NULL,
  `id_resgistro_pago` int NOT NULL,
  PRIMARY KEY (`id_transferencia`),
  KEY `id_resgistro_pago_trans_idx` (`id_resgistro_pago`),
  CONSTRAINT `id_resgistro_pago_trans` FOREIGN KEY (`id_resgistro_pago`) REFERENCES `registro_pagos` (`id_registro_pagos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `genero` varchar(40) DEFAULT NULL,
  `codigo_postal` varchar(10) DEFAULT NULL,
  `pais` varchar(100) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `spotify`.`usuario`
(`id_usuario`,
`email`,
`nombre`)
VALUES
('1','jose@correo.com','jose'),
('2','pedro@correo.com','pedro'),
('3','julio@correo.com','julio');

INSERT INTO `spotify`.`canciones`
(`id_canciones`,
`duracion`,
`genero`,
`id_albumes`)
VALUES
('1', '300000', 'rock', '1'),
('2', '200000', 'rock', '1'),
('3', '300000', 'rock', '1');

INSERT INTO `spotify`.`albumes`
(`id_albumes`,
`titulo`)
VALUES
('1','metalica'),
('2','audioslave'),
('3','carajo');