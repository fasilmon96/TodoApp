import React, { useEffect, useState } from "react";
import './Todo.css';
import AddTask from "./AddTask";
import ListTask from "./ListTask";

const Todo = () => {
    const[tasks,setTasks]=useState([
       

    ])
    useEffect(()=>{
        document.title = `ypu have ${tasks.length} pending tasks`
    })

    const addTask =(title)=>{
     
        const newTask =[...tasks,{title}]
        setTasks(newTask)

    }
    const removeTask=(index)=>{
        const newTask =[...tasks]
        newTask.splice(index)
        setTasks(newTask)
        
    
     
    }
  return (
    <>
      <div className="todo-container">
      <div className="header">TODO APP</div>
      <div className="add-task"><AddTask addTask={addTask}/></div>
      <div className="tasks">
        {tasks.map((task,index)=>
        <ListTask task={task} removeTask={removeTask} index={index} />
        )}
        </div>
      </div>
    </>
  );
};

export default Todo;
