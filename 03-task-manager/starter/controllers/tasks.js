const GetAllTasks = (req,res) => {
    res.send('All items')
}
const CreateTask = (req,res) => {
    res.json(req.body)
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