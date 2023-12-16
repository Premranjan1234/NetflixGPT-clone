import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import Gptmoviesuggestion from './Gptmoviesuggestion'
import { BG_URL } from '../Utils/Constants'

const GptSearch = () => {
  return (
    <div>
      <div className=' fixed -z-10'>
      <img
      src={BG_URL}
      alt="logo"
      />
      </div>
        <Gptsearchbar/>
        <Gptmoviesuggestion/>
    </div>
  )
}

export default GptSearch