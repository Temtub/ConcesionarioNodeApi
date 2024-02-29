
const Clientes = require("../database/models/Clientes")
const Compras = require("../database/models/Compras")
const Fabricantes = require("../database/models/Fabricantes")
const Usuarios = require("../database/models/Usuarios")
const Vehiculos = require("../database/models/Vehiculos")

//       |CLIENTES| -> |COMPRAS| <- |VEHICULOS|
Clientes.belongsToMany(Vehiculos, {through : Compras})
Vehiculos.belongsToMany(Clientes, {through : Compras})

Clientes.hasMany(Compras)
Compras.belongsTo(Clientes)

Vehiculos.hasMany(Compras)
Compras.belongsTo(Vehiculos)


//        |FABRICANTES| <- |VEHÍCULOS|
Fabricantes.hasMany(Vehiculos)
Vehiculos.belongsTo(Fabricantes)

