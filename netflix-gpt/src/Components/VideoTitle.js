import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=" pt-36 px-12 ">
        <h1 className=' font-bold text-6xl'>{title}</h1>
        <p className=' py-6 w-1/4 text-lg '>{overview}</p>
        <div>
            <button className=' text-white bg-slate-500 p-2 px-12 rounded-lg mr-2'> Play</button>
            <button className=' text-white bg-slate-500 p-2 px-12 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle