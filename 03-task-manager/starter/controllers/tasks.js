const Task = require('../models/tasks')

const GetAllTasks = (req,res) => {
    res.send('All items')
}
const CreateTask = async (req,res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
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