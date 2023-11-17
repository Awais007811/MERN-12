import React  from "react";
import { Link } from "react-router-dom";
import { Params } from "react";

function Header(){

const nav=    Params;

    return(
        <React.Fragment>
          <div className="flex gap-5">
          <Link className="bg-green-900 mb-5 p-3 w-40 text-white rounded-full font-bold hover:bg-red-400" to={"/"}>

                    Home {nav}
                </Link>   
                <Link className="bg-green-900 w-40 p-3 mb-5 text-white rounded-full font-bold hover:bg-red-400" to={"/api"}>
                    Api
                </Link>  
                <Link to={"/about"} className="bg-green-900 mb-5 w-40 p-3 text-white rounded-full font-bold hover:bg-red-400">
                    About
                </Link>  
                <Link to={"/calculator"} className="bg-green-900 mb-5 w-40 p-3 text-white rounded-full font-bold hover:bg-red-400">
                    Calculator
                </Link>  
                <Link to={"/stop-watch"} className="bg-green-900 mb-5 p-3 w-40 text-white rounded-full font-bold hover:bg-red-400">
                    Stop-Watch
                </Link>
                <Link to={"/assign-task"} className="bg-green-900 mb-5 p-3 w-40 text-white rounded-full font-bold hover:bg-red-400">
                    Assign Task
                </Link>
            </div>
        </React.Fragment>
    );
}

export default Header;
