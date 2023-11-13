import React  from "react";
import Swal from 'sweetalert2';

import { useState } from 'react';


function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <React.Fragment>
     <div  className=" flex flex-col justify-center items-center">
      <h1 className=" text-lg font-bold m-5 center">Contact Form</h1>
      
        <form onSubmit={(e)=>{
          e.preventDefault();
          Swal.fire({
            title: 'Form submitted',
            text: `name: ${name},email:${email},message:${message}`,
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
        }

         className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
         <div>
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
            <input onChange={(e) => {
              setName(e.target.value);
            }} type="text" placeholder="Enter Your Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>    
          </div>
          <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
          <input type="email" placeholder="Enter Your Email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div> 
          <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Website
      </label>
          <input  type="text" placeholder="Enter Your Web URL" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
          </div>
          <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Description
      </label>

          <textarea name="description" placeholder="Add Description Here" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
          </div>
          <div>

          <button type="submit" className="	bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
</div>


        </form>
       
     </div>
    </React.Fragment>
  )
}

export default App
