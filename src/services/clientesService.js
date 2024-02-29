const sequelize = require("../database/db")//LLamamos a sequelize para hacer las consultas

const Clientes = require("../database/models/Clientes")//LLamamos al modelo de clientes

const getAllClientes = async () =>{//Creamos la funcion para traer todos los clientes
    const clientes = await Clientes.findAll()//Conseguimos todos los clientes con el modelo y la funcion para la accion que queramos
    return clientes //Devolvemos los datos
}

const createCliente = async ( nombre, direccion,fechanac,telefono) =>{

    try {
        const clienteACrear = await Clientes.create({//Creamos el create con los respectivos valores
            nombre_cli : nombre,
            direccion_cli : direccion,
            fechanac_cli : fechanac,
            telefono_cli : telefono,
            
        })
        return clienteACrear
    } catch (error) {
        return error.errors[0].message
    }
    
}

module.exports = { //Exportamos las funciones
    getAllClientes,
    createCliente
}