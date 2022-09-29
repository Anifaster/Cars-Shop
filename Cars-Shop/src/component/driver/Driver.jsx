import React from 'react'
import './Driver.css'
import drive from '../../images/drive.png'
const Driver = () => {
    return (
        <div className='driver'>
            <div className="left">
                <img src={drive} alt="" />
            </div>
            <div>
                <h2>Find your Perfect car <span>to try befor you buy</span></h2>
                <p>Make sure your future wheels work well with your lifestyle by taking your time in the driver's seat.</p>
                <button>Browser Cars</button>
            </div>
        </div>
    )
}

export default Driver
