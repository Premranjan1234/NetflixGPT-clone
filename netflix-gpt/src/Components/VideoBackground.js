import React from 'react'
import useMovieTrailer from '../Hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
    const trailerVideo=useSelector(store=>store.movies?.trailerVideos)
   
    useMovieTrailer(movieId);
  return (
    <div>
       <iframe
        width="560" 
        height="315" 
        src={"https://www.youtube.com/embed/"+trailerVideo?.key}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen>

        </iframe>

    </div>
  )
}

export default VideoBackground