import React from 'react';
import { useState,useEffect } from "react";
import axios from 'axios';
import Aside from './Aside';

const MainContent = () => {

const [data, setData] = useState([]);
// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => {
//     // Do something with the fetched data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors that occurred during the fetch
//     console.error(error);
//   });

useEffect(() => {
    // Define the API endpoint you want to fetch data from
    const apiUrl = 'http://localhost:5001/posts';

    // Use axios to make a GET request
    axios.get(apiUrl)
      .then(response => {
        // Handle the successful response
        setData(response.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount


return (
        <React.Fragment>
        
        {/* <ul>
        {data.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul> */}
        <div className="container mx-auto">
            <div className="flex flex-wrap">
                <div className="w-full h-full md:w-full md:h-full p-4">
                    <h1 className="text-4xl font-bold  mb-4 text-center">Blogger</h1>
                    {data.map(post => (
                        
                      <div key={post.id} className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-lg overflow-hidden md:max-w-md mx-auto">
                      <img
                        className="w-full h-48 object-cover"
                        src="https://via.placeholder.com/600x400"
                        alt="Placeholder"
                      />
                      <div className="p-6">
                        <h2 className="font-bold text-2xl mb-2 text-white">{post.title}</h2>
                        <p className="text-gray-200 text-base mb-4">
                          {post.content}
                        </p>
                        <div className="flex items-center">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Read More
                          </button>
                          <span className="ml-4 text-gray-300">{post.date}</span>
                        </div>
                      </div>
                      </div>
                      ))}

                    {/* <div className="flex flex-wrap">
                    
           
        {data.map(post => (
          
                      <div key={post.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                            <div className="bg-white rounded shadow p-4">
                                <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                                <p className="text-gray-700">{post.content}</p>
                                <a href="#" className="text-blue-500 hover:text-blue-700 mt-4 block">Read More</a>
                            </div>
                    </div>

        
        ))}
      

                    </div> */}
                </div>

                {/* <Aside /> */}
                {/* <div className="aside w-full md:w-1/4 p-4">
                    <div className="bg-white rounded shadow p-4">
                        <h2 className="text-2xl font-bold mb-4">Aside</h2>
                        <p className="text-gray-700">This is a small description about me. Feel free to explore my blog and get to know me better.</p>
                    </div>
                </div> */}
            </div>
        </div>
        {/* {data.map(post => (
  
        <div key={post.id} className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-lg overflow-hidden md:max-w-md mx-auto">
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/600x400"
        alt="Placeholder"
      />
      <div className="p-6">
        <h2 className="font-bold text-2xl mb-2 text-white">{post.title}</h2>
        <p className="text-gray-200 text-base mb-4">
          {post.content}
        </p>
        <div className="flex items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Read More
          </button>
          <span className="ml-4 text-gray-300">January 1, 2022</span>
        </div>
      </div>
    </div>
))} */}

{/* {data.map(post => (
          
          <div key={post.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <div className="bg-white rounded shadow p-4">
                    <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                    <p className="text-gray-700">{post.content}</p>
                    <a href="#" className="text-blue-500 hover:text-blue-700 mt-4 block">Read More</a>
                </div>
        </div>


))} */}

        </React.Fragment>

    );
};

export default MainContent;