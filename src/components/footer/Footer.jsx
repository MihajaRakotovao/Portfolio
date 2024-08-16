import React from 'react'
import './Footer.scss'
import { FaFacebookF, FaMailBulk } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { TiMail } from 'react-icons/ti'
function Footer() {
  return (
    <footer>
        <div className='info-footer'>
            <h4>Copyright © 2024 Mhj.Rk</h4>
        </div>
        <div className='footer-social-media'>
          <a href="https://github.com/MihajaRakotovao" target='blank'><FaGithub className='icon-footer'/></a>
          <a href="https://web.facebook.com/toky.andriamihajarakotovao" target='blank'><FaFacebookF className='icon-footer'/></a>
          <TiMail className='icon-footer' />
        </div>
    </footer>
  )
}

export default Footer
