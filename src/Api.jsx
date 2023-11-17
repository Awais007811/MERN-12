import React from "react";
import axios from "axios";
import { useState } from "react";
import Header from "./Header";
function Api(){
  const [posts, setPosts] = useState([]);

    async function fetchPosts(){
        axios
        .get(" https://api.publicapis.org/entries")
        .then((result)=>setPosts(result.data))
        .catch((e)=>console.error(e));

        // console.log(posts)
      }
    return(
        <React.Fragment>
            <Header></Header>
            <div className="flex flex-col justify-center items-center">
                    <h1>Rest API's</h1>
                    <button type="button" onClick={fetchPosts} className="bg-green-900 text-white p-3 w-20 rounded">Fetch Post</button>
                    <div>
                    <h3>{posts.map(function(post){
                        return(
                        <div key={post} className="p-2">
                        
                            <div>{post?.title}</div>
                            
                        </div>
                        )
                    })}</h3>
                    </div>
            </div>
        </React.Fragment>
    );
}

export default Api;