import { useDispatch } from 'react-redux'
import { addTrendingMovies } from '../Utils/moviesSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/Constants';

const useTrending=()=>{
    const dispatch=useDispatch();
const getMovieVideos=async()=>{
    
    
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS);
    const json=await  data.json();
    dispatch(addTrendingMovies(json.results));
    
}
useEffect(()=>{
    getMovieVideos();
},[])
};

export default useTrending;