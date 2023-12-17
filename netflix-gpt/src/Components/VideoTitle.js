import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video text-white bg-gradient-to-r from-black  absolute pt-[20%] px-24 ">
        <h1 className=' font-bold text-2xl md:text-6xl'>{title}</h1>
        <p className='hidden md:inline-block py-6 w-1/4 text-lg '>{overview}</p>
        <div className=" my-4 md:my-0">
            <button className=' text-black bg-white p-2 px-6 md:px-12 rounded-lg mr-2 hover:bg-opacity-50 '> Play</button>
            <button className='hidden md:inline-block text-black bg-white p-2 px-12 rounded-lg bg-opacity-40'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle