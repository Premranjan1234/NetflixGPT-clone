import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../Utils/moviesSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/Constants';

const usePopularMovies=()=>{
    const dispatch=useDispatch();
const getMovieVideos=async()=>{
    
    
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS);
    const json=await  data.json();
    dispatch(addPopularMovies(json.results));
    
}
useEffect(()=>{
    getMovieVideos();
},[])
};

export default usePopularMovies;