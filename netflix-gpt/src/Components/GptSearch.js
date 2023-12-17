import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import Gptmoviesuggestion from './Gptmoviesuggestion'
import { BG_URL } from '../Utils/Constants'

const GptSearch = () => {
  return (
    <>
      <div className='fixed  -z-10'>
      <img
      className=' '
      src={BG_URL}
      alt="logo"
      />
      </div>
      <div className="pt-[30%] md:p-0">
        <Gptsearchbar/>
        <Gptmoviesuggestion/>
      </div>  
    </>
  )
}

export default GptSearch