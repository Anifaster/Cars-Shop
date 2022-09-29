import React, {useState} from 'react'
import  './Navbar.modules.css'
// import styles from './Navbar.modules.css'
import {AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'
import Logo from '../../images/logo.png'
const Navbar = () => {
const [nav, setNav] = useState(false)

    return (
        <header className='navbar'>
            <img src={Logo} className='img' alt="" />
            <nav>
                <ul className={ nav ? 'active' : 'menu' }>
                    <li>
                        <a href="/">Learn More</a>
                    </li>
                    <li>
                        <a href="/">Log in</a>
                    </li>
                    <li>
                        <a href="/">Sing up</a>
                    </li>
                    <li>
                        <AiOutlineSearch size={25} style={{marginTop: '6px'}}/>
                    </li>
                    <li>
                        <AiOutlineUser size={25} style={{marginTop: '6px'}}/>
                    </li>
                </ul>
            </nav>
            <div onClick={() => setNav(!nav)} className='mobile_btn'>
                {
                    nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>
                }
                
                
            </div>
        </header>
    )
}

export default Navbar
