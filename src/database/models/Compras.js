const sequelize = require("../db")

const { Model, DataTypes } = require("sequelize")

class Compras extends Model {}

Compras.init(
    {
        fecha_compra : {
            type : DataTypes.DATE,
            allowNull : false,
            primaryKey : true,
        },
        precio_compra : {
            type : DataTypes.DOUBLE,
            allowNull : false,
        },
        

    },{
        sequelize : sequelize,
        modelName : "compras",
        freezeTableName : true,
        timestamps : false,

    }
)

module.exports = Compras