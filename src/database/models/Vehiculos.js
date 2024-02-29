const sequelize = require("../db")

const { Model, DataTypes } = require("sequelize")

class Vehiculos extends Model {}

Vehiculos.init(
    {
        id_veh : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
        nombre_veh : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        unidades_veh : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        precio_veh : {
            type : DataTypes.STRING,
            allowNull : false,
        },

    },{
        sequelize : sequelize,
        modelName : "vehiculos",
        freezeTableName : true,
        timestamps : false,

    }
)

module.exports = Vehiculos