import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Login from './Pages/Login.jsx';
import AddPost from './Pages/AddPost.jsx';
import SignUp from './Pages/SignUp.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about-us",
    element: <AboutUs/>,
  },
  {
    path:"/sign-up",
    element:<SignUp />
  },
  {
    path: "/contact-us",
    element: <Contact/>,
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path: "/add-post",
    element: <AddPost />,
  },
  


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

        <RouterProvider router={router} />

  </React.StrictMode>,
)
