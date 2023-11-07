import React from 'react';
import { useState } from 'react';

export default function App() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState('');
  const [status,setStatus]=useState('Completed');
  const [dateTime,setDateTime] = useState(Date);
  return (
    <React.Fragment>
      <div className='container'>
        <form onSubmit={(event)=>{
          event.preventDefault();
          setTodo([...todo,{
            task:task,
            status:status,
            dateTime:dateTime
          }
        ]);
        setTask(" ");
        setStatus("");
        }}>
         <label>Add Task</label>
          <input type='text' placeholder='Add Your Task Here!' value={task}
          onChange={(event)=>{
            setTask(event.target.value);

          }}
          />
          <select value={status}
          onChange={(event)=>{
            setStatus(event.target.value);
          
          }
        }
          >
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
          </select>
          <button type='submit'>Submit</button>
        </form>
      <div className='todobody' style={{gap:'20px',display:'colomn'}}>
        {todo.map((todoItem) => {
            return(
            <div className='showList' key={todoItem}>
            <span >  {todoItem.task}  </span>
            <span>  {todoItem.status} </span>
            <span>  {todoItem.dateTime} </span>
            
            </div>
          )
        })}

      </div>
      </div>
    </React.Fragment>
  );
}