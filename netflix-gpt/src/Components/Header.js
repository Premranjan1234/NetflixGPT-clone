import React, { useEffect } from 'react'
import { auth } from '../Utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import {  onAuthStateChanged } from "firebase/auth";
import { LOGO } from '../Utils/Constants';



const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(store=>store.user);
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,Email:email,name:displayName,photoURL:photoURL}));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
        
        // User is signed out
        // ...
      }
      
    });
    return ()=>unsubscribe();
  },[])
  const handleSignOut=()=>{
    
   signOut(auth).then(() => {
    
  // Sign-out successful.
   }).catch((error) => {
  // An error happened.
  });
  
}
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <img
      className="w-40"
      src={LOGO}
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