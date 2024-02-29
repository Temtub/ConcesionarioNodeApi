const sequelize = require("../db")

const { Model, DataTypes } = require("sequelize")

class Fabricantes extends Model {}

Fabricantes.init(
    {
        id_fab : {
            type : DataTypes.INTEGER,
            primaryKey : true, 
            autoIncrement : true,
            allowNull : false,
        },
        nombre_fab :{
            type : DataTypes.STRING,
            allowNull : false,
        },
        direccion_fab : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        telefono_fab : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        fechanac_fab : {
            type : DataTypes.DATE,
        }
    },{
        sequelize : sequelize,
        modelName : "fabricantes",
        freezeTableName : true,
        timestamps : false
    }

)

module.exports = Fabricantes