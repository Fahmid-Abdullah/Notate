const { model } = require('mongoose');
const ToDoModel = require('../models/ToDoModel');


module.exports.getToDo = async (req, res) => {
    try {
        const toDo = await ToDoModel.find();
        res.send(toDo);
    } catch (error) {
        console.error('Error fetching ToDo:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports.saveToDo = async (req, res) => {
    try {
        const { text, time } = req.body;
        const data = await ToDoModel.create({ text, time });

        

        console.log("Added Successfully...");
        console.log(data);
        res.send(data);
    } catch (error) {
        console.error('Error saving ToDo:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports.updateToDo = async (req, res) => {
    const { _id, text, time } = req.body
    ToDoModel
        .findByIdAndUpdate(_id, { text, time })
        .then(() => res.send ("Updated Successfully..."))
        .catch((err) => console.log(err))

}

module.exports.deleteToDo = async (req, res) => {
    const { _id} = req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => console.log(err))
}