import React from 'react'
import { images } from '../../constant/constant'
import './imageslider.css'

function ImageSlider() {
  return (
    <div className='imgslide' id='wraper'>
      {
        images.map((item)=>{
            const {id, img, title} = item;
            return(
                <div>
                <div className=' cards   ' >
                    <div className=' wholecard' >
                        <div className="wraper">
                        <img src={img} alt={title} width={100} />
                        </div>
                        <div className="imagetitle">
                        <div className="imgtitle">{title}</div>
                        </div>
                    </div>
                </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default ImageSlider
