INSERT INTO `clientes` (`id_cli`, `nombre_cli`, `direccion_cli`, `fechanac_cli`, `telefono_cli`) VALUES
(1, 'Juan Cliente', 'Dirección de Juan Cliente', '2023-11-05 23:00:00', '555555555'),
(2, 'Maria Cliente', 'Dirección de Maria Cliente', '0000-00-00 00:00:00', '555555555'),
(3, 'Miguel Cliente', 'Dirección de Maria Miguel', '0000-00-00 00:00:00', '555555555');

INSERT INTO `users` (`id_user`, `nombre_user`, `apellidos_user`, `email_user`, `password_user`) VALUES
(1, 'Pepito', 'Pérez', 'pepito@perez.es', '$2a$10$TOsY3s8U5DKWTYqHziy42ejamtiK6jPjweWCK6/LsSUYBEmMkSfq6'),
(2, 'Manolito', 'Gafotas', 'manolito@gafotas.es', '$2a$10$zPYRoJ7BRIZV4BwelD6roOzHr6TP4gX9bQWiGsGbiveGPgXjMKjPu');

INSERT INTO `fabricantes` (`id_fab`, `nombre_fab`, `direccion_fab`, `fechanac_fab`, `telefono_fab`) VALUES
(1, 'fabricante Citroen', 'dirección Citroen', '0000-00-00 00:00:00', '555555555'),
(2, 'fabricante BMW', 'dirección BMW', '0000-00-00 00:00:00', '555555555');

INSERT INTO `vehiculos` (`id_veh`, `nombre_veh`, `unidades_veh`, `precio_veh`, `fabricanteIdFab`) VALUES
(1, 'M3', 3, 98456, 2),
(2, 'Serie 3 Touring', 5, 42050, 2),
(3, 'C5 x business', 2, 49715, 1);


INSERT INTO `compras` (`fecha_compra`, `precio_compra`, `vehiculoIdVeh`, `clienteIdCli`) VALUES
('2020-12-29 23:00:00', 75000, 1, 1),
('2020-12-30 23:00:00', 75000, 1, 2),
('2022-10-02 22:00:00', 40000, 2, 1),
('2021-02-02 23:00:00', 40000, 2, 3);
