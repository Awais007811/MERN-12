import { useState } from 'react'
import React from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Header from './Header'

import './App.css'

function App() {

  
  const [sec,setSec] = useState(0);
  const [min,setMin] = useState();
  const [hour,setHour] = useState(0);
  
  const [intervalId,setIntervalId] = useState(0);



  // setInterval(()=>{
  //   console.log("Set Interval");
  // },3000);
  // setTimeout(()=>{
  //   console.log("Set Time out")
  // },5000);

   function start() {
    // setMin(min+1);
    
    const Id  = setInterval(() => {
      
      setSec((sec) => sec + 1);
     

    }, 10);

  
    
    setIntervalId(Id);
    console.log(Id);
   
    
  }

  function stop() {
   
      console.log(intervalId);
    // setMin(min+1);
    clearInterval(intervalId);

   
    
  }

  function reset(){

    clearInterval(intervalId);
    setMin(0);
    setHour(0);
    setSec(0);
    
  }

 

 
  return (
   <React.Fragment>
{/*      
      <div>
           <Header/>
            
          <div className='flex justify-center item-center mt-10 flex-col'>
          <h1 className="p-5 rounded font-bold bg-slate-900 text-white mb-2">Stop Watch</h1>

           <div className='flex flex-row justify-center gap-2'>

            <span className='w-40 h-40 rounded-full  
                inline-flex items-center justify-center  
                     bg-white text-gray-700 text-xl font-bold 
                     bg-green-500'>{Math.floor(sec/3600)} :{Math.floor(sec/60)%60} :{sec%60}</span>
           </div>

          </div>
          
          <div className=' flex justify-center gap-5 mt-5'>
          <button className='border-[2px] border-green-900 rounded p-3 hover:bg-red-900 hover:text-white' onClick={start}>Start</button>

          <button className='border-[2px] border-gray-900 rounded p-3  hover:bg-green-900 hover:text-white' onClick={stop}>Stop</button>

          <button className='border-[2px] border-red-900 rounded p-3  hover:bg-yellow-900 hover:text-white' onClick={reset} >Reset</button>

          </div>

      </div> */}

      
   </React.Fragment>
  )
}

export default App;