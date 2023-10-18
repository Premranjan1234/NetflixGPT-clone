import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer'
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTrending from '../Hooks/useTrending';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';



const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrending();
  useUpcomingMovies();
  
  return (
    <div className="">
      <Header/>
      <Maincontainer/>
      <SecondaryContainer/>
      
      
    </div>
  )
}

export default Browse