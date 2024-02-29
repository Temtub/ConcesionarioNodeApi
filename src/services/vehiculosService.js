const Vehiculo = require("../database/models/Vehiculos")

const sequelize = require("../database/db")
const { where } = require("sequelize")

const getOneVehiculo = async ( nombre ) =>{

    const newVehiculo = await Vehiculo.findOne(
        {where : { "nombre_veh" : nombre}}
    )

    return newVehiculo
}

module.exports = {
    getOneVehiculo
}