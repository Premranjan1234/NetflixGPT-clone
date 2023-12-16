import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const Gptmoviesuggestion = () => {
  const {movieNames,movieResults}=useSelector((store)=>store.gpt);
  if(!movieNames)
  return null;

  return (
  <div className=" p-2 m-4 bg-black text-white">
    <div>
      {movieNames.map((movieName,index)=>(
        <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
      ))}
  
    </div>

  </div>
  )
};

export default Gptmoviesuggestion;
