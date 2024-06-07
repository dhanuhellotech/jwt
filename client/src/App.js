import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Task from "./components/Task";
import TodoList from "./components/TodoList";

function App() {
  const [todolist, setTodolist] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/task")
      .then((res) => {
        setTodolist(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
const addTask = newTask =>{
  setTodolist([...todolist,newTask])
}
const taskComplete = task=>{
const newList =[...todolist]
newList.forEach(item =>{
  if(item._id === task._id ){
    item.isComplete =task.isComplete
  }
})
setTodolist(newList)
}

const removeTask=task=>{
const newList = todolist.filter(item => !(item._id === task._id))

setTodolist(newList)
}
  return (
    <div className="App">
   <Task addTask={addTask}/>
   <TodoList todolist={todolist} taskComplete={taskComplete} removeTask={removeTask}/>
    </div>
  );
}

export default App;

// pZimVlCpyTli6n3B
// mongodb+srv://dhanalakshmihellotech:pZimVlCpyTli6n3B@todo.hugefr0.mongodb.net/?retryWrites=true&w=majority&appName=todo
