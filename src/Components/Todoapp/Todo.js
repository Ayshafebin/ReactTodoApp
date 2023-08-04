import React, { useState } from 'react'
import './Todo.css'
import AddTask from './AddTask'
import ListTask from '../ListTask'

const Todo = () => {
  const [task, setTask] = useState([]);

  const addTask = (title) => {
    const newTask = [...task, {title}]
    setTask(newTask);
  }

  const removeTask = (index) => {
    const newTask = [...task]
    newTask.splice(index, 1)
    setTask(newTask)
  }
  
  return (
    <>
        <div  className='todo-container'>
         <div className='header'>TODO APP</div>
         <div className='add-task'>
            <AddTask addTask={addTask} />
         </div>
         <div className='tasks'>
          {task.map((task, index) => (
            <ListTask  task = {task} removeTask={removeTask} index={index} key={index} />
          ))}
         </div>
        </div>
    </>
  )
}

export default Todo