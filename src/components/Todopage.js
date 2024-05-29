import React, { useState } from 'react';
import {useDispatch,useSelector} from "react-redux";
import { addTodo,removeTodo } from '../Redux/features/todoSlice';

function Todopage() {
 
    const dispatch=useDispatch();
  const [newTask, setNewTask] = useState('');
  const mytodos=useSelector(state=>state.todos)

  console.log("mytodos",mytodos)
  const addTask = () => {
  
    dispatch(addTodo(newTask))
    setNewTask('');
  };





  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Todo List</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          style={{
            padding: '10px',
            fontSize: '16px',
            marginRight: '10px',
            width: '300px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        <button onClick={addTask} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Add
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {mytodos.map((task, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: task.completed ? '#d3ffd3' : '#fff',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          >
            <span
         
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {task.text}
            </span>
            <button onClick={()=>dispatch(removeTodo(task.id))}  style={{ marginLeft: '10px', color: 'red' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todopage;
