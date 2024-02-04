import React from 'react'
import image from './images/Lacivert Minimalist Proje Sunum.png'
import Footer from './Footer'
const MainContent = () => {
  return (
    <div>
      <div className='main_content'>
        <div className='main_bg'>
            <div className='title_wrap'>
                <div className='tittle'>
                    <h3>Keyfiyyətli təhsil almaq üçün məlumat istəyin</h3>
                    <p>Codebay IT HƏR ZAMAN SIZI DÜŞÜNÜR!</p>
                </div>
                <div className='button_wrap'>
                    <a href='#'><button>Məlumat Istə</button></a>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainContent
