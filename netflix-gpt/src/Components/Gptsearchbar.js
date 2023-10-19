import React from 'react'
import { language } from '../Utils/languageConstants'
import { useSelector } from 'react-redux'

const Gptsearchbar = () => {
    const langKey=useSelector(store=>store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center ">
        <form className="  bg-black w-1/2 grid grid-cols-12">
            <input className=' col-span-9 p-4 m-4' type='text' placeholder={language[langKey].searchPlaceholder}/>
            <button className=' col-span-3 px-2 py-4 m-4 bg-red-600 text-black rounded-lg'>{language[langKey].search}</button>
        </form>
    </div>
  )
}

export default Gptsearchbar