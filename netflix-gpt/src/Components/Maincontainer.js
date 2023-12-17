import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const Maincontainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies);
    if(!movies)
    return;
    const mainMovie=movies[0];
    const {original_title,overview,id}=mainMovie;
  return (
    <div className="pt-[13%] bg-black md:p-0">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id}/>
        
    </div>
  )
}

export default Maincontainer