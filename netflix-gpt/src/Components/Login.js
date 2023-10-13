import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true)
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);

  };
  return (
    <div>
      
      <Header/>
      <div className=' absolute'>
      <img
      src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      alt="logo"
      />
      </div>
      <form className="w-3/12 bg-black p-12 absolute my-36 mx-auto left-0 right-0 text-white rounded-lg opacity-80">
        <h1 className=' p-2 font-bold text-xl'>{isSignInForm?'Sign In':'Sign Up'}</h1>
        {!isSignInForm && <input 
        type="text" placeholder='FullName' 
        className='my-2 p-2 w-full bg-gray-700'
        />}
        <input
         type="text" placeholder='Email' 
         className='my-2 p-2 w-full bg-gray-700'
         />
        <input 
        type="text" placeholder='Password' 
        className='my-2 p-2 w-full bg-gray-700'
        />
        <button className=" p-2 bg-red-700 w-full rounded-lg cursor-pointer">
          Submit
        </button>
        <p className=' py-4 cursor-pointer ' onClick={toggleSignInForm}>
          {isSignInForm?"New to Netflix? SignUp now":"Already Registered? SignIn now"}
          
        </p>

      </form>
    </div>
  )
}

export default Login