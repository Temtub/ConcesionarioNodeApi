const express = require("express")//Se utiliza para crear las apis
const sequelize = require("./database/db")//La conexion a la db
const bodyParser = require("body-parser")//Se necesita para pasar datos por body en las rutas

const app = express()//Creamos una instancia de express

app.use(express.json() )
app.use(bodyParser.urlencoded({ extended : true} ) )//Hacemos que use body parser y que es tipo json

const router = require("./routes/appRoutes")//Definimos donde esta el router de la aplicaion
app.use("/concesionario", router)//Lo empezamos a usar y lo definimos

const PORT = process.env.PORT || 3000//Marcamos cual es el puerto

require("./database/relations") //requerimos las relaciones de la bd, tambien trayendo a la vez los modelos creados

app.listen(PORT, async ()=>{//Empezamos a escuchar en el puerto
    sequelize
    .sync( {force : false} )
    .then( console.log("BD sincronizada 🤩") )//Hacemos que sequelize sincronice la bd con nuestros modelos
})
