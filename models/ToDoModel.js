const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema( {
    text: {
        type: String, 
        required: true
    },
    time: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('ToDo', todoSchema)