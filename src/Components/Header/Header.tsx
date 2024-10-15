import React from 'react'
import Logo from '../../Assets/Gif/Converter.gif'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='w-full bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 h-[10%]'>
      <div className='h-[100%] flex justify-between items-center ml-3 mr-3'>
        <div className='text-white flex items-center'>
            <img src={Logo} alt="logo" />
            <h2 className='font-bold text-2xl'>Convertor</h2>
        </div>
        <div className='flex text-white gap-2'>
        <span>
          About
        </span>

        <span>
          About
        </span>

        <span>
          About
        </span>
        </div>
      </div>
    </div>
  )
}

export default Header