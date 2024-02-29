const sequelize = require("../db")

const { Model, DataTypes } = require("sequelize")

class Clientes extends Model {}

Clientes.init(
    {
        id_cli : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
        nombre_cli : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : {
                args : true,
                msg : "El nombre ya existe"
            }
        },
        direccion_cli : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        fechanac_cli : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        telefono_cli : {
            type : DataTypes.STRING,
            allowNull : false,
        }

    },{
        sequelize : sequelize,
        modelName : "clientes",
        freezeTableName : true,
        timestamps : false,

    }
)

module.exports = Clientes