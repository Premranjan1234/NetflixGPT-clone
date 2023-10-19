import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer'
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTrending from '../Hooks/useTrending';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';



const Browse = () => {
  const gptSearch=useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useTrending();
  useUpcomingMovies();
  
  return (
    <div className="">
      <Header/>
      {gptSearch?<GptSearch/>:<><Maincontainer/>
      <SecondaryContainer/></>}
      
      
      
      
    </div>
  )
}

export default Browse