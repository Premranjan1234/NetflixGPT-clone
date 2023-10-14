import React, { useEffect } from 'react'
import Browse from './Browse'
//import Header from './Header'
import { createBrowserRouter, useNavigate } from 'react-router-dom';
import {RouterProvider} from "react-router-dom";
import Login from './Login';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';


const Body = () => {
  const dispatch=useDispatch();
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,Email:email,name:displayName}));
        
        // ...
      } else {
        dispatch(removeUser());
        
        // User is signed out
        // ...
      }
    });
  },[])
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