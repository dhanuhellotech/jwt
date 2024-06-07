import React from "react";
import "./Todo.css";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
function TodoList(props) {
  const todoList = props.todolist.map((task, index) => {
    const taskcomplete = (task) => {
      axios
        .put(`http://localhost:8000/api/task/${task._id}`, {
          _id: task._id,
          todo: task.todo,
          isComplete: !task.isComplete,
        })
        .then((res) => props.taskComplete(res.data)).catch(err=>console.log(err))
    };

    const removeTask = (id) => {
      axios.delete(`http://localhost:8000/api/task/${id}`).then(res=>props.removeTask(res.data)).catch(err=>console.log(err))
    };
    return (
      <li key={index}>
        <div>
          <CheckIcon className={task.isComplete ? "isComplete" : "checkicon"} />
          <p
            className={task.isComplete ? taskcomplete : ""}
            onClick={() => {
              taskcomplete(task);
            }}
          >
            {task.todo}
          </p>
        </div>
        <div>
          <EditIcon className="edit" />
          <DeleteIcon
            className="close"
            onClick={() => {
              removeTask(task._id);
            }}
          />
        </div>
      </li>
    );
  });
  return (
    <div className="tasklist">
      <ul>{todoList}</ul>
    </div>
  );
}

export default TodoList;
