import React  from "react";
import { Link } from "react-router-dom";

function Header(){

    return(
        <React.Fragment>
          <div className="flex gap-5">
          <Link to={"/"}>
                    Home
                </Link>   
                <Link to={"/api"}>
                    Api
                </Link>  
                <Link to={"/about"}>
                    About
                </Link>  
                <Link to={"/calculator"}>
                    Calculator
                </Link>  
                    
            </div>
        </React.Fragment>
    );
}

export default Header;