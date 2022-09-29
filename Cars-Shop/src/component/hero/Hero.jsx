import React from 'react'
import './Hero.css'
import {AiOutlineSearch} from 'react-icons/ai'
const Hero = () => {
  return (
    <div className='hero'>
        <form action="">
        <div className='text'>
            <label htmlFor="">Where</label>
            <input className='text_input' type="text" placeholder='Search Location' />
        </div>
        <div className='from'>
            <span className="border"></span>
            <label >From</label>
            <input type="date" />
        </div>
        <div className="until">
            <label>Until</label>
            <input type="date"  />
        </div>
        <div className="search_btn">
            <AiOutlineSearch className='icon'/>
            <button className='btn'>Search for cars </button>
        </div>
        </form>
    </div>
  )
}

export default Hero
