import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../Utils/validate';
import { auth } from '../Utils/firebase';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [isSignInForm,setIsSignInForm]=useState(true)
  const [errorMessage,setErrorMessage]=useState(null)
  const email=useRef(null);
  const password=useRef(null);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);

  };
  const handleButtonClick=()=>{
    
    const message= checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message)
    return;
    
    if(!isSignInForm)
    {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        navigate('/browse')
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode+"-"+errorMessage);
        // ..
      });
    }
     else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/browse');
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode+"-"+errorMessage);
      });
    }
  }
  return (
    <div>
      
      <Header/>
      <div className=' absolute'>
      <img
      src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      alt="logo"
      />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 bg-black p-12 absolute my-36 mx-auto left-0 right-0 text-white rounded-lg opacity-80">
        <h1 className=' p-2 font-bold text-xl'>{isSignInForm?'Sign In':'Sign Up'}</h1>
        {!isSignInForm && <input 
        type="text" placeholder='FullName' 
        className='my-4 p-4 w-full bg-gray-700'
        />}
        <input
         ref={email}
         type="text" placeholder='Email' 
         className='my-4 p-4 w-full bg-gray-700'
         />
        <input 
         ref={password}
         type="text" placeholder='Password' 
         className='my-4 p-4 w-full bg-gray-700'
        />
        <p className="text-red-500 font-bold text-lg ">{errorMessage}</p>
        <button onClick={handleButtonClick} className=" my-6 p-4 bg-red-700 w-full rounded-lg cursor-pointer">
          {isSignInForm?"Sign In":"Sign Up"}
        </button>
        <p className=' py-4 cursor-pointer ' onClick={toggleSignInForm}>
          {isSignInForm?"New to Netflix? SignUp now":"Already Registered? SignIn now"}
          
        </p>

      </form>
    </div>
  )
}

export default Login