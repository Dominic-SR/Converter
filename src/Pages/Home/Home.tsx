import React from 'react'
import Image from '../../Assets/Gif/Image.gif'
import PDF from '../../Assets/Gif/PDF.gif'
import BoxCard from '../../Components/BoxCard/BoxCard'

type Props = {}

const Home = (props: Props) => {

  const boxData = [
    {
      label : 'Image to PDF',
      img_left : Image,
      img_right : PDF
    },
    {
      label : 'PDF to Image',
      img_left : PDF,
      img_right : Image
    },
    {
      label : 'Excell to PDF'
    }
  ]
  return (
    <div className='h-[88%] m-4 border-2 border-purple-900'>
        <BoxCard 
          boxData={boxData}
        />
    </div>
  )
}

export default Home