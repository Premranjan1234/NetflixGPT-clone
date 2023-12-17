import { useDispatch, useSelector } from 'react-redux'
import { addUpcomingMovies } from '../Utils/moviesSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/Constants';

const useUpcomingMovies=()=>{
    const dispatch=useDispatch();
    const upcomingMovies=useSelector(store=>store.movies.upcomingMovies);
const getMovieVideos=async()=>{
    
    
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS);
    const json=await  data.json();
    dispatch(addUpcomingMovies(json.results));
    
}
useEffect(()=>{
   !upcomingMovies && getMovieVideos();
},[])
};

export default useUpcomingMovies;