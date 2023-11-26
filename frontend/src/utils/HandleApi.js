import axios from 'axios';

const baseUrl = "http://localhost:5000";

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data -->', data);
            setToDo(data);
        });
};

const addToDo = (text, time, setText, setTime, setToDo) => {
    axios
        .post(`${baseUrl}/save`, { text, time })
        .then((data) => {
            console.log(data);
            setText("");
            setTime("");
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err))
};

const updateToDo = (toDoId, text, time, setText, setTime, setToDo, setisUpdating) => {
    axios
        .post(`${baseUrl}/update`, { _id: toDoId, text, time })
        .then((data) => {
            console.log(data);
            setText("");
            setTime("");
            setisUpdating(false)
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err))
};

const deleteToDo = (_id, setToDo) => {
    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err))
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
