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
        const id = req.params.id
        const Singletask = await Task.findOne({_id: id})
        res.status(201).json(Singletask)
        if (!Singletask){
            return res.status(404).json({msg: 'No se encontro la tarea solicitada'})
        }
    } catch (error) {
        console.log(error);
    }
}
const UpdatingTask = (req,res) => {
    res.json(req.params.id)
}
const DeletingTask = async (req,res) => {
    try {
        const id = req.params.id
        const singletask = await Task.findOneAndDelete({_id: id})
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