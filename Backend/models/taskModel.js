const mongoose = require('mongoose')


const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'this filed is reqired']
    },
    completedTask: {
        type: Boolean,
        default: false,
        required: true,
    }
},
{
    timestamps: true
}
)


const Task = mongoose.model('Task', taskSchema)

module.exports = Task