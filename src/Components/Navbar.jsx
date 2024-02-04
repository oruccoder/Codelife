import React, { useState } from 'react'

const Navbar = () => {
  const [hamOPen, setHamOpen] = useState(false)

  const openNav = () => {
    setHamOpen(!hamOPen)
    const nav = document.getElementById("nav")
    nav.style.display = (nav.style.display == "" || nav.style.display == "none") ? "block" : "none"
  }
  return (
    <div>
      <div id='nav' className='navbar'>
      <ul>
        <li><a href='#'>Programlaşdırma</a></li>
        <li><a href='#'>Dizayn</a></li>
        <li><a href='#'>Ödənişsiz Dərslər</a></li>
        <li><a href='#'>Bloq</a></li>
        <li><a href='#'>Haqqımızda</a></li>
        <li><a href='#'>Əlaqə</a></li>
      </ul>
      </div>
      <div onClick={openNav} className="nav_hamburger">
      <i id='bars' className="fas fa-bars"></i>
      </div>
    </div>
  )
}

export default Navbar
