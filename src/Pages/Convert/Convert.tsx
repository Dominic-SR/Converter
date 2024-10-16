import React from 'react'
import { useLocation } from 'react-router-dom'

const Convert = () => {

const location = useLocation();

console.log("PASSS",location.state);


  return (
    <div className='h-[88%] m-4 border-2 border-purple-900'>

    </div>
  )
}

export default Convert