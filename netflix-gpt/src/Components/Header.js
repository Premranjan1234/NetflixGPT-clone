import React from 'react'
import { auth } from '../Utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';


const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  const handleSignOut=()=>{
    
   signOut(auth).then(() => {
    navigate("/");
  // Sign-out successful.
   }).catch((error) => {
  // An error happened.
  });
  
}
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <img
      className="w-40"
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="logo"
      />
      {user && <div className='flex p-2'>
        <img className="w-12 h-12 mx-2"
        src={user.photoURL}
        alt="logo"
        />
        <button onClick={handleSignOut} className=" text-white font-bold">Sign Out</button>
      </div>}
      
    </div>
  )
}

export default Header