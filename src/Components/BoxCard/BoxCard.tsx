import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';

interface props{
    boxData: object | any;
}

const BoxCard:FC<props> = ({boxData}) => {
  const navigate = useNavigate()

  const redirectConvert = (data:any) =>{
       if(Object.keys(data).length){
        navigate('convert', {state:data})
        }
  }
  return (
    
    <div className='flex flex-wrap justify-center align-center gap-10'>
            {boxData.map((data:any,index:number)=>( 
            <div className='flex-[1_0_20%] m-[25px] h-[300px] border-2 border-purple-400 rounded-md flex flex-col gap-10 items-center justify-center cursor-pointer' key={index} onClick={()=>{redirectConvert(data)}}>
                <span className='text-purple-400 text-lg' >{data?.label}</span>
                <div className='flex items-center gap-5'>
                <img className='h-[80px] w-[80px]' src={data.img_left} alt="gif" />
                <img className='h-[80px] w-[80px]' src={data.img_right} alt="gif" />
                </div>
            </div>))} 
        </div>
   
    )
}

export default BoxCard