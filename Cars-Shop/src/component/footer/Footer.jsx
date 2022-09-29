import React from 'react'
import './Footer.css'
import logo from '../../images/logo_dark.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='containe'>
            <img src={logo} alt="/" />
            <button>Share A Car</button>
        </div>
    </div>
  )
}

export default Footer
