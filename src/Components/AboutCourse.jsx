import React from 'react'
import Accordion from './Accordion'
import MainContent from './MainContent'

const AboutCourse = () => {
  return (
    <div>
      <div className='container_px'>
        <div className='about'>
            <div className='about_img'>
                <img src='https://celtit.com/assets/images/about/about-home.png'></img>
            </div>
            <div className='title'>
                <h2>Proqramlaşdırma kursları haqqında suallar</h2>
                <Accordion />
            </div>
        </div>
      </div>
      <MainContent />
    </div>
  )
}

export default AboutCourse
