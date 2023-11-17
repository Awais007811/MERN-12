import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Api from './Api.jsx'
import Calculator from './Calculator.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import About from './About.jsx'
import Home from './Home.jsx'
import StopWatch from './StopWatch.jsx'
import AssignTask from './AssignTask.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/assign-task",
    element: <AssignTask/>,
  },
  {
    path: "/api",
    element: <Api/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/calculator",
    element: <Calculator/>,
  },
  {
    path: "/stop-watch",
    element: <StopWatch/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)