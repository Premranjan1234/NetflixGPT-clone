import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../Utils/moviesSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/Constants';

const usePopularMovies=()=>{
    const dispatch=useDispatch();
    const popularMovies=useSelector(store=>store.movies.popularMovies);

    const getMovieVideos=async()=>{
    
    
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS);
    const json=await  data.json();
    dispatch(addPopularMovies(json.results));
    
}
useEffect(()=>{
   !popularMovies && getMovieVideos();
},[])
};

export default usePopularMovies;