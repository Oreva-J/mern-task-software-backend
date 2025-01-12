const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
//const connectDb = require('./config/connectDb')
const mongoose = require('mongoose')
// const Task = require('./taskModel')
const taskRoutes = require('./routes/taskRoute')

const app = express()


// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: ['http://localhost:5173/', 'https://mern-task-program.orender.com']
}))
app.use(taskRoutes)

// Home Page route
app.get('/', (req, res)=>{
    res.send("this is the home page")
})



const PORT = process.env.PORT || 4000

 mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log(`mongo connected on host `);
    
    app.listen(PORT, ()=>{
        console.log(`server running successfuly on PORT: ${PORT}`);
    
    })
})
.catch((error)=> console.error(error)
)


