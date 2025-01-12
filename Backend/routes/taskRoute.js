const { CreateTask, GetTasks, GetTask, DeleteTask, UpdateTask } = require('../controllers/taskController')
const Task = require('../models/taskModel')
const express = require('express')

const router = express.Router()


router.post('/api/task', CreateTask )
router.get('/api/task', GetTasks )
router.get('/api/task/:id', GetTask)
router.delete('/api/task/:id', DeleteTask)
router.put('/api/task/:id', UpdateTask)


module.exports = router