import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Api from './api.jsx';

import StopWatch from './StopWatch.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  

  },
  {
    path: "/api",
    element: <Api/>,
  

  },
  {
    path: "/stopwatch",
    element: <StopWatch/>,
  

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      </RouterProvider>
  </React.StrictMode>,
)
