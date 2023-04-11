const express = require('express');
const app = express();
const tasks = require('./routers/tasks')
const port = 3000
const connectDB = require('./db/connect');
require('dotenv').config()

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

//Con esta const lo que hacemos es crear una funcion asincrona, realizamos primero la conexion con la db y luego iniciamos el servidor, de no ser posible lo captura con el .catch
//Utilizamos variable de entorno para pasar la url por .env
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port || 'https://express-js-projects.vercel.app/', ()=>{console.log('server on')})
    } catch (error) {
        console.log(error);
    }
}
start()