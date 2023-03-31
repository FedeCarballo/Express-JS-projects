const express = require('express');
const app = express();
const tasks = require('./routers/tasks')
const port = 3000;

//Middleware
app.use(express.json());


//Routes:
app.get('/',(req,res)=>{
    console.log('Task Manager');
})
app.use('/api/v1/tasks',tasks)

//Router : 
// get <-- obtener todas las tareas 
// post <-- generar una nueva tarea
// get :id <-- obtener una tarea por id
// patch <-- Actualizar una tarea
// delete <-- Eliminar una tarea



app.listen(port, ()=>{
    console.log('server on');
})