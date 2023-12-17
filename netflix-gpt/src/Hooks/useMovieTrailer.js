import { useDispatch, useSelector } from 'react-redux'
import { addMovieTrailer } from '../Utils/moviesSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/Constants';

const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
    const movieTrailer=useSelector(store=>store.movies.trailerVideos);
const getMovieVideos=async()=>{
    
    
    const data=await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_OPTIONS);
    const json=await  data.json();
    console.log(json);
    const filterData=json.results.filter((video)=>video.type==="Trailer");
    const trailer=filterData.length?filterData[0]:json.results[0];
    dispatch(addMovieTrailer(trailer));
    
}
useEffect(()=>{
  !movieTrailer && getMovieVideos();
},[])
};

export default useMovieTrailer;