const express = require('express');
const app = express();
const tasks = require('./routers/tasks')
const port = process.env.PORT||3000 
const connectDB = require('./db/connect');
require('dotenv').config()
const cors = require('cors')
//Middleware
app.use(express.static('./public'))
app.use(express.json());

//Routes:
app.use('/api/v1/tasks',tasks)
//Router : 
// get <-- obtener todas las tareas 
// post <-- generar una nueva tarea
// get :id <-- obtener una tarea por id
// patch <-- Actualizar una tarea
// delete <-- Eliminar una tarea
app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
  
//Con esta const lo que hacemos es crear una funcion asincrona, realizamos primero la conexion con la db y luego iniciamos el servidor, de no ser posible lo captura con el .catch
//Utilizamos variable de entorno para pasar la url por .env
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{console.log('server on')})
    } catch (error) {
        console.log(error);
    }
}
start()