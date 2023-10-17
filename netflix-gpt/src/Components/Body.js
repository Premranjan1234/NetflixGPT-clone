import React, { useEffect } from 'react'
import Browse from './Browse'
//import Header from './Header'
import { createBrowserRouter, useNavigate } from 'react-router-dom';
import {RouterProvider} from "react-router-dom";
import Login from './Login';



const Body = () => {
  
  
  
  
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
       path:"/browse",
       element:<Browse/>
    },

  ])
  return (
    <div>
        
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body