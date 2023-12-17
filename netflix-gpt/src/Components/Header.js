import React, { useEffect } from 'react'
import { auth } from '../Utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import {  onAuthStateChanged } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUAGE } from '../Utils/Constants';
import { toggleGptSearchView } from '../Utils/gptSlice';
import { changeLang } from '../Utils/configSlice';



const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(store=>store.user);
  const showLanguageOption=useSelector(store=>store.gpt.showGptSearch)
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
const handleGptSearchClick=()=>{
  dispatch(toggleGptSearchView());
}
const handleLangChange=(e)=>{
  
  dispatch(changeLang(e.target.value));
}

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-30 flex flex-col md:flex-row justify-between">
      <img
      className="w-40 mx-auto md:mx-0"
      src={LOGO}
      alt="logo"
      />
      {user && <div className='flex p-2'>
        {showLanguageOption&&
        <select onChange={handleLangChange} className=' p-2 m-2 bg-gray-500 text-white'>
        {SUPPORTED_LANGUAGE.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>}
        
        <button onClick={handleGptSearchClick} className=' py-2 px-4 m-2 bg-purple-800 text-white rounded-lg'>
          {showLanguageOption? "HomePage": "GPTSearch"}
        </button>
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