import React from 'react'
import logo from './images/codebayLogo-removebg-preview (1).png'
import Navbar from './Navbar'
import BreadCrumps from './BreadCrumps'
const MenuArea = () => {
  return (
    <div>
      <div className='container_px'>
      <div className='container'>
      <div className='logo'>
        <a href='#'><img src={logo}></img></a>
      </div>
      <Navbar/>
      <div className='navmenu_btn'>
        <a href='#'><button>Hədiyyə Dərs</button></a>
      </div>
      </div>
      </div>
      <BreadCrumps />
    </div>
  )
}

export default MenuArea
