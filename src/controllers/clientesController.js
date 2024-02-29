
const clientesService = require("../services/clientesService")//Llamamos al servicio de los clientes de donde traeremos los datos

const getAllClientes = async (req, res)=>{//Creamos una funcion para conseguir todos los clientes

    res.json( await clientesService.getAllClientes() ) //En el res.json para devolver datos y llamamos a la funcion del servicio que devuelva todos los clientes

}


const createCliente = async (req, res)=>{
    let params = req.body
    
    res.json(await clientesService.createCliente( params.nombre_cli, params.direccion_cli, params.fechanac_cli, params.telefono_cli ) )
}

module.exports = { //Exportamos todas las funciones
    getAllClientes,
    createCliente
}



