import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

 return (
    <nav className="bg-cyan-400">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-start items-center">
          <a href="/" className="text-white font-bold text-xl">
            Logo
          </a>
          <div className="text-white flex gap-5 ml-5">
            
              <Link to="/" className="text-white">
                Home
              </Link>
              <Link to="/about-us" className="text-white">
                About
              </Link>
              <Link to="/contact-us" className="text-white">
                Contact Us
              </Link>
              <Link to="/login" className="text-white">
                Login
              </Link>
              <Link to="/sign-up" className="text-white">
                SignUp
              </Link>
              <Link to="/add-post" className="text-white">
                Add New Blog
              </Link>
              <div className="absolute hidden  hover:visible right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
             
              asdfdsfs
              <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
                Login
              </Link>
             
              <Link to="/sign-up" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">
                SignUp
              </Link>
              </div>
          </div>
        </div>
      </div>
    </nav>
 );
};

export default Navbar;