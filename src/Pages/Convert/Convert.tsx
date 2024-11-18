import React from 'react'
import { useLocation } from 'react-router-dom'

const Convert = () => {

const location = useLocation();

console.log("PASSS",location.state);


  return (
    <div className='h-[88%] m-4 border-2 border-purple-900'>
      <div className='flex justify-center items-center h-[50%] m-10 bg-black-400 border-2 border-purple-900 border-dashed'>
        <h1 className='text-purple-800 font-bold text-2xl'>Drag and Drop the files</h1>
      </div>
    </div>
  )
}

export default Convert