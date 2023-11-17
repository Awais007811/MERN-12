import React from "react"
import {useState} from 'react';

export default function AssignTask(){
    const [task,setTask] =useState('');
    const [name,setName] =useState('');
    const [tasks,setTasks] =useState([]);


    return (
        <React.Fragment>

        <form onSubmit={(event)=>{
          event.preventDefault();
          setTasks([...tasks,{
            task:task,
            name:name,
          }
        ]);
        setTask("");
        setName("");
        }}>
           <div className="flex flex-col justify-center mt-10">
            <input  type='text' className='border-[5px] mb-5 mt-5 flex flex-col gap-2 rounded w-60' placeholder='Add Your Task Here!' value={task}
          onChange={(event)=>{
            setTask(event.target.value);

          }}
          />
             <input  type='text' className='border-[5px] mb-5 mt-5 flex flex-col gap-2 rounded w-60' placeholder='Add Your Task Here!' value={name}
          onChange={(event)=>{
            setName(event.target.value);

          }}
          />
         <button className='bg-green-600 p-3 m-2 rounded-full font-bold text-white w-[100px]' type='submit'>Submit</button>
 
    </div>


            </form>
            <div className='todobody' style={{gap:'20px',display:'colomn'}}>
                {tasks.map((taskAssign,index) => {
                    return(
                    <div className='showList' key={index}>
                    <span >Task:  {taskAssign.task}  </span>
                    <span> Assigned To: {taskAssign.name} </span>
                    <span>
                     <button  onClick={()=>{

                        setTasks(tasks.filter(mytask=>mytask!=taskAssign));
                     
                     }}> Delete</button>
                    </span>
                    
                    </div>
                )
                })}

      </div>
        </React.Fragment>
    )
}