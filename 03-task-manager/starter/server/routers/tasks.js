const express = require('express');

const router = express.Router();

const {
    GetAllTasks,
    DeletingTask, 
    UpdatingTask, 
    CreateTask,
    SingleTask} = require('../controllers/tasks')

    
router.get('/',GetAllTasks);
router.post('/',CreateTask);
router.get('/:id',SingleTask)
router.patch('/:id',UpdatingTask)
router.delete('/:id',DeletingTask)

//Otra forma de escribir el routing puede ser de esta manera:

/*
router.route('/').get(GetAllTasks).post('CreateTask')
router.route('/:id').get('SingleTask).patch('UpdatingTask').delete('DeletingTask')

De esta manera solo escribimos el path de la ruta por route y luego los metodos a utilizar, simplificando asi el codigo
*/


module.exports = router