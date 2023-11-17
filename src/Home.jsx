import React from 'react';
import { useState } from 'react';
import Header from './Header'
import Trash from './assets/trash-bin.png'
export default function Home() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState('');
  const [status,setStatus]=useState('');
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const dateAssign =  `${month}/${date}/${year}`;
  const [dateTime,setDateTime] = useState(dateAssign);
  return (
    <React.Fragment>
        <Header/>
 
      <div className='container mt-40 flex gap-5 border-10-gray bg-transparent shadow-lg'>
        <form onSubmit={(event)=>{
          event.preventDefault();
          setTodo([...todo,{
            task:task,
            status:status,
            dateTime:dateTime
          }
        ]);
        setTask("");
        setStatus("");
        }}>
         <label></label>
          <input  type='text' className='border-[5px] mb-5 mt-5 flex flex-col gap-2 rounded w-60' placeholder='Add Your Task Here!' value={task}
          onChange={(event)=>{
            setTask(event.target.value);

          }}
          />
        
        <input type="text" className='border-[5px] flex flex-col gap-2 rounded w-60' placeholder='Assign To' value={status}
          onChange={(event)=>{
            setName(event.target.value);
          
          }
        }/>
        <button className='bg-green-600 p-3 m-2 rounded-full font-bold text-white' type='submit'>Submit</button>
        </form>
      <div className='todobody' style={{gap:'20px',display:'colomn'}}>
        {todo.map((todoItem,index) => {
            return(
            <div className='showList' key={todoItem}>
            <span >Task:  {todoItem.task}  </span>
            <span> Assigned To: {todoItem.status} </span>
            <span> Date:{todoItem.dateTime} </span>
            <span>
                {/* {index}
                <img src="<Trash/>"  /> */}
                <button onClick={
                    (event)=>{
                        alert(index)

                        // const updateTodo =[...todo];
                        // updateTodo.splice(index);
                        // setTask(updateTodo);
                        
                    }
                }>Delete</button>
            </span>
            
            </div>
          )
        })}

      </div>
      </div>
    </React.Fragment>
  );
}