import React from 'react'
import MenuArea from './MenuArea'
const Header = () => {
  return (
    <div>
      <div className='header'>
        <header>
        <div className="container_px">
          <div className='header-top'>
          <div className='header_contact'>
            <i className='fas fa-envelope'></i>
          <a href='mailto:it@codebay.az'>it@codebay.az</a>
          </div>

          <div className='header_contact'>
            <i className='fas fa-phone'></i>
          <a href='tel:994552287908'>+994 55 228-79-08</a>
          </div>
          <div className='header_contact'>
            <i className='fas fa-location'></i>
          <a href='#'>Bakı Ş, Binəqədi Rayonu S.Bəhlulzadə 44</a>
          </div>
          </div>
          </div>

          <div className='social-media'>
            <a href='#' className='fab fa-instagram'></a>
            <a href='#' className='fab fa-facebook'></a>
            <a href='#' className='fab fa-tiktok'></a>
            <a href='#' className='fab fa-youtube'></a>
          </div>
        </header>

        <MenuArea />
    </div>
      
    </div>
  )
}

export default Header
