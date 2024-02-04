import React from 'react'
import footerLogo from './images/codebayLogo-removebg-preview (1).png'
const Footer = () => {
    return (
        <div>
            <div className='foter'>
                <footer>
                    <div className='footer_container'>
                        <div className='footer_title'>
                            <a href='#'><img src={footerLogo}></img></a>
                            <p>İşlərinə həsr olunmuş istedadlı peşəkarlar tərəfindən tədris axtarırsınızsa, Codebay hər zaman yanınızdadır .</p>
                            <div className='footer_social_media'>
                                <a href='#'><i className='fab fa-instagram'></i></a>
                                <a href='#'><i className='fab fa-tiktok'></i></a>
                                <a href='#'><i className='fab fa-youtube'></i></a>
                                <a href='#'><i className='fab fa-facebook'></i></a>
                            </div>
                        </div>
                        <div className='footer_services'>
                            <h3>Xidmətlərimiz</h3>
                            <ul>
                                <li><a href='#'>Proqramlaşdırma</a></li>
                                <li><a href='#'>Dizayn</a></li>
                                <li><a href='#'>Robotexnika</a></li>
                            </ul>
                        </div>
                        <div className='footer_contact'>
                            <h3>Əlaqə</h3>
                            <div className='f_contacts'>
                            <i className='fas fa-location'></i>
                            <a href='#'>Bakı Ş, Binəqədi Rayonu S.Bəhlulzadə 44</a>
                            </div>
                            <div className='f_contacts'>
                                <i className='fas fa-phone'></i>
                                <a href='tel:994552287908'>+994 55 228-79-08</a>
                            </div>
                            <div className='f_contacts'>
                                <i className='fas fa-envelope'></i>
                                <a href='mailto:it@codebay.az'>it@codebay.az</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
