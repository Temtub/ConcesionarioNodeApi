const sequelize = require("../db")

const { Model, DataTypes } = require("sequelize")

class Usuarios extends Model {}

Usuarios.init(
    {
        id_user : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
        nombre_user : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        apellidos_user : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        email_user : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                isEmail : {
                    msg : "Ha de ser un correo",
                },
            }
        },
        password_user : {
            type : DataTypes.STRING,
            allowNull : false,
        }

    },{
        sequelize : sequelize,
        modelName : "users",
        freezeTableName : true,
        timestamps : false,

    }
)

module.exports = Usuarios