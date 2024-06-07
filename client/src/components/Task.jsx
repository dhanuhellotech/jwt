import React, { useState } from "react";
import "./Task.css";
import axios from "axios";
function Task(props) {
  const [task, setTask] = useState("");
  const addtask = () => {
    if (task.trim() === "") {
      return;
    } else {
      axios
        .post("http://localhost:8000/api/task", {
          todo: task,
          isComplete: false,
        })
        .then((res) => {
          setTask("");
     props.addtask(res.data)
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="addtask">
     <input
  type="text"
  placeholder="Add task..."
  value={task}
  onChange={event => setTask(event.target.value)}
/>
      <button onClick={()=>addtask()}>Add Task</button>
    </div>
  );
}

export default Task;
