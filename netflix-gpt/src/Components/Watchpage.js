import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { API_OPTIONS } from '../Utils/Constants';

const Watchpage = () => {
    const [searchParams]=useSearchParams();
    const [trailer,setTrailer]=useState();
    const video=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/'+searchParams.get("v")+'/videos?language=en-US',API_OPTIONS);
    const json= await data.json();
    console.log(json)
    setTrailer(json.results[0]);
    }
    useEffect(()=>{
      video();
    },[])
    
    
  return (
    <div>
       <Link to="/browse"> <button className='m-2 p-3  text-white bg-purple-600 fixed rounded-lg'>Home</button></Link>
        <iframe 
        className=' w-full h-screen '
       width="800" height="400" 
       src={"https://www.youtube.com/embed/"+trailer?.key+"?&autoplay=1&mute=1" }
       title="YouTube video player" 
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowFullScreen></iframe>
    </div>
  )
}

export default Watchpage