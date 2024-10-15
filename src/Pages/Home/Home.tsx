import React from 'react'
import Image from '../../Assets/Gif/Image.gif'
import PDF from '../../Assets/Gif/PDF.gif'

type Props = {}

const Home = (props: Props) => {

  const data = [
    {
      label : 'Image to PDF'
    },
    {
      label : 'Word to PDF'
    },
    {
      label : 'Excell to PDF'
    }
  ]
  return (
    <div className='h-[88%] m-4 border-2 border-purple-900'>
        <div className='flex flex-wrap justify-center align-center gap-10'>
            {data.map((data)=>( 
            <div className='flex-[1_0_20%] m-[25px] h-[300px] border-2 border-purple-400 rounded-md flex flex-col gap-10 items-center justify-center '>
                <span className='text-purple-400 text-lg' >{data?.label}</span>
                <div className='flex items-center gap-5'>
                <img className='h-[80px] w-[80px]' src={Image} alt="gif" />
                <img className='h-[80px] w-[80px]' src={PDF} alt="gif" />
                </div>
            </div>))} 
        </div>
    </div>
  )
}

export default Home