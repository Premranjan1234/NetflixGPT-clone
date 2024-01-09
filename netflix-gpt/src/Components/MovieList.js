import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom';


const MovieList = ({title,movies}) => {

  return (
    
    <div className="px-6 ">
        <h1 className="py-4 font-bold text-xl md:text-3xl text-white">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar   ">
         
         <div className="flex">
           {movies?.map(movie=>(<Link to={"/watchpage?v="+movie.id}><MovieCard  key={movie.id} posterPath={movie.poster_path}/></Link>))}
            
         </div>
        </div>

    </div>
  )
}

export default MovieList;