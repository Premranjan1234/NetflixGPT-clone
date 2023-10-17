import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer'
import SecondaryContainer from './SecondaryContainer';



const Browse = () => {
  useNowPlayingMovies();
  
  return (
    <div className="flex">
      <Header/>
      <Maincontainer/>
      <SecondaryContainer/>
      
      
    </div>
  )
}

export default Browse