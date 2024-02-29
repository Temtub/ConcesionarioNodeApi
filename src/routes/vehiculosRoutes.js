const vehiculosRouter = require("express").Router()

const vehiculosController = require("../controllers/vehiculosController")

vehiculosRouter.get("/:name", vehiculosController.getOneVehiculo)

module.exports = vehiculosRouter