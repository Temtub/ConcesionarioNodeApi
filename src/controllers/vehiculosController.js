const vehiculosService = require("../services/vehiculosService")

const getOneVehiculo = async (req, res)=>{
    let {name} = req.params
    
    res.json(await vehiculosService.getOneVehiculo(name))
}

module.exports = {
    getOneVehiculo
}