const router = require("express").Router()//Creamos el enrutador

const clientesRouter = require("./clientesRoutes")//Llamamos a las rutas de clientes
const vehiculosRouter = require("./vehiculosRoutes")

router.use("/clientes", clientesRouter)//Generamos la ruta para clientes
router.use("/vehiculos/", vehiculosRouter)

module.exports = router//las exportamos