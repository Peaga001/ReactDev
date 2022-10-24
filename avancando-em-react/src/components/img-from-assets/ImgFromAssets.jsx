import React from 'react'
import Img from '../../assets/logo192.png'
import './ImgFromAssets.css'

const ImgFromAssets = () => {
  return (
    <div className='App'>

      {/* Imagem em assets */}
      <div>
        <img src={Img} alt="img2"/>
      </div>

    </div>
  )
}

export { ImgFromAssets }
export default ImgFromAssets