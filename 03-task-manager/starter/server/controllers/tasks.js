const Task = require('../models/tasks')

const GetAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(201).json(tasks)
    } catch (error) {
        console.log(error);
    }
}
const CreateTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}
const SingleTask = async (req,res) => {
    try {
        const {id:taskID} = req.params
        const Singletask = await Task.findOne({ _id: taskID})
        res.status(201).json(Singletask)
        if (!Singletask){
            return res.status(404).json({msg: 'No se encontro la tarea solicitada'})
        }
    } catch (error) {
        console.log(error);
    }
}


const UpdatingTask = async (req,res) => {
    try {
        const {id:taskID} = req.params

        const task = await Task.findOneAndUpdate({ _id: taskID}, req.body, {
            new: true,
            runValidators: true,
        })
        //Si aca arriba no pasamos los options no van a correr los validators que pasamos por models

        if(!task) {
            return res.status(404).json({msg:'No se encontro la tarea solicitada'})
        }
        res.status(200).json({task})

    } catch (error) {
        console.log(error);
    }
}

const DeletingTask = async (req,res) => {
    try {
        const {id:taskID} = req.params
        const singletask = await Task.findOneAndDelete({_id: taskID})
        const AllTask = await Task.find({})
        if(!singletask){
            return res.status(404).json({msg: 'No se encontro una tarea con esa id'})
        }
        res.status(201).json(AllTask)
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    GetAllTasks,
    CreateTask,
    SingleTask,
    UpdatingTask,
    DeletingTask
}