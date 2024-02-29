const clientesRouter = require("express").Router()//Generamos el router

const clientesController = require("../controllers/clientesController")//LLamamos al controlador

clientesRouter.get("/", clientesController.getAllClientes)//Generamos una nueva ruta para conseguir todos los clientes

clientesRouter.post("/", clientesController.createCliente)

module.exports = clientesRouter //Exportamos el router
