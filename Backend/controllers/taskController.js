const Task = require('../models/taskModel');


const CreateTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        console.error({msg: error.message});
        
    }
}

const GetTasks = (req, res) => { 
    Task.find()
    .then((task) => res.status(200).json(task))
    .catch((error)=> {
        res.status(500).json({error: error.message})
        console.error({msg: error});
        
    }
    )
 }

 const GetTask = async (req, res) => {
    try {
        const {id} = req.params
        const task = await Task.findById(id)
        
        if(!task){
            return res.status(404).json(`task with ID:${id} not Found`)
        }

        res.status(200).json(task)

    } catch (error) {
        res.status(500).json({msg: error.message});
    }
 }

//  Delete Task
    const DeleteTask = async (req,res) => {
        try {
            const {id} = req.params
            const task = await Task.findByIdAndDelete(id)
            if (!task) {
                return res.status(404).json(`Task not available for Delete ${id}`)
            }
            res.status(200).json('Task Deleted')
    
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }

// Update Task
    const UpdateTask = async (req, res) => {
        try {
            const {id} = req.params
            const task = await Task.findByIdAndUpdate({_id: id}, req.body, {new: true, runValidators: true})

            if (!task) {
                return res.status(404).json('Task not available to update')
            }
            res.status(200).json(task)
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }

 module.exports = {
    CreateTask,
    GetTasks,
    GetTask,
    DeleteTask,
    UpdateTask,
 }