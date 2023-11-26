import NavBar from "./components/Navigation";
import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [isUpdating, setisUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text, time) => {
    setisUpdating(true);
    setText(text); // Use setText to update the state
    setTime(time);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <NavBar />
      <div>
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add a task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Add a time (00:00 AM/PM)..."
            value={time}
            onChange={(e) => setTime(e.target.value)}
          ></input>

          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateToDo(toDoId, text, time, setText, setTime, setToDo, setisUpdating)
                : () => addToDo(text, time, setText, setTime, setToDo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>

        <div className="list">
          {toDo.map((item) => 
            <ToDo key={item._id} text={item.text} time={item.time} 
            updateMode={() => updateMode(item._id, item.text, item.time)}
            deleteToDo={() => deleteToDo(item._id, setToDo)} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
