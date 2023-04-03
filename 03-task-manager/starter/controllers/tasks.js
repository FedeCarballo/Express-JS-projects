const Task = require('../models/tasks')

const GetAllTasks = (req,res) => {
    res.send('All items')
}
const CreateTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}
const SingleTask = (req,res) => {
    res.json(req.params.id)
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