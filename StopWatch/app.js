import { useState } from 'react'
import React from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.js'

import './App.css'

function App() {

  const [result,setResult] = useState(0);
  const [val_1,setVal_1] = useState(0);
  const [val_2,setVal_2] = useState(0);
  const [min,setMin] = useState(0);
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
      setMin(min => min + 1);
    }, 200);

    setIntervalId(Id);
   
    
  }
  function stop() {
    // setMin(min+1);
    clearInterval(intervalId);
   
    
  }

 

 
  return (
   <React.Fragment>
      <div className='flex flex-col justify-center items-center shadow-md shadow-gray-500 rounded-md w-[480px] p-8' >
          <form onSubmit={(e)=>{
            e.preventDefault();
          }}>
          <div>
          <label className='flex flex-col' htmlFor="num1" id="num2">VALUE 1:</label>
          <input className='border-2 border-salmon-500 py-2 px-2 rounded-md' onChange={(e)=>{
            setVal_1(e.target.value);
          }} value={val_1}  type="number" required/>

          </div>
          <div>
          <label className='flex flex-col' htmlFor="num2" id="num2">VALUE 2:</label>
          <input className='border-2 border-salmon-500 py-2 px-2 rounded-md' onChange={(e)=>{
            setVal_2(e.target.value);
          }} value={val_2} type="number" required/>

          </div>
          <div className='gap-5 flex justify-center item-center mt-10'>
            <button onClick={()=>{
              setResult(Number(val_1)+Number(val_2));
              setVal_1(0);
              setVal_2(0);

            }} className='bg-black text-white p-3 rounded font-bold'  type='submit'>+</button>
            <button onClick={()=>{
              setResult(Number(val_1)-Number(val_2));
              setVal_1(0);
              setVal_2(0);


            }} className='bg-black text-white p-3 rounded font-bold' type='submit'>-</button>
            <button onClick={()=>{
              setResult(Number(val_1)*Number(val_2));
              setVal_1(0);
              setVal_2(0);


            }} className='bg-black text-white p-3 rounded font-bold' type='submit'>*</button>
            <button onClick={()=>{
              setResult(Number(val_1)/Number(val_2));
              setVal_1(0);
              setVal_2(0);


            }} className='bg-black text-white p-3 rounded font-bold' type='submit'>/</button>

          </div>

          

          </form>
          <div className='flex justify-center item-center mt-10'>
            <h1 className='bg-black text-white p-3 rounded font-bold'> Result =  {result}</h1>
          </div>
      </div>    
          
      <div>
            
          <div className='flex justify-center item-center mt-10 flex-col'>
          <h1 className="p-5 rounded font-bold bg-slate-900 text-white mb-2">Stop Watch</h1>

            <h1 className='bg-black text-white p-3 rounded font-bold'> {min} </h1>
          </div>
          
          <div className=' flex justify-center gap-5 mt-5'>
          <button className='border-[2px] border-green-900 rounded p-3 hover:bg-red-900 hover:text-white' onClick={start}>Start</button>

          <button className='border-[2px] border-red-900 rounded p-3  hover:bg-green-900 hover:text-white' onClick={stop}>Stop</button>

          </div>

      </div>

      
   </React.Fragment>
  )
}

export default App
