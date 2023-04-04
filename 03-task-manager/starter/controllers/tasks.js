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
        const Singletask = await Task.findById(req.params.id)
        res.status(201).json(Singletask)
    } catch (error) {
        console.log(error);
    }
}
const UpdatingTask = (req,res) => {
    res.json(req.params.id)
}
const DeletingTask = (req,res) => {
    res.json(req.params.id)
}
module.exports = {
    GetAllTasks,
    CreateTask,
    SingleTask,
    UpdatingTask,
    DeletingTask
}