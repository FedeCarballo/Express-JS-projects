const getAllJobs = async (req,res) => {
    res.send('Get all jobs')
}

const GetJob = async (req,res) => {
    res.send('Single Job')
}

const CreateJob = async (req,res) => {
    res.send('Create a job')
}

const UpdateJob = async (req,res) => {
    res.send('Updating job')
}
const DeleteJob = async (req,res) => {
    res.send('Deleting job')
}
module.exports = {
    getAllJobs,
    GetJob,
    CreateJob,
    UpdateJob,
    DeleteJob
}