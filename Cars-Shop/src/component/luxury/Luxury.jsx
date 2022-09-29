import React from 'react'
import './Luxury.css'
const Luxury = () => {
  return (
    <div className='luxury'>
      <div className='heading'>
        <h2>Luxury Selection</h2>
        <div className='text_bg'>
          <p>
            <span>Select from the top luxury vehicles to roll in style </span>
          </p>
        </div>
      </div>

      <div className='container'>
        <div className="card">
          <img src="https://repost.uz/storage/uploads/1-1658463974-avto-post-material.jpeg" alt="" />
          <div className='content'>
            <h3>Rols Royce</h3>
          </div>
        </div>
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Maserati_GranTurismo_front_20071104.jpg/1200px-Maserati_GranTurismo_front_20071104.jpg" alt="" />
          <div className='content'>
            <h3>Maserati</h3>
          </div>
        </div>
        <div className="card">
          <img src="https://i.ytimg.com/vi/4qFGWJSIEng/maxresdefault.jpg" alt="" />
          <div className='content'>
            <h3>Range Rover</h3>
          </div>
        </div>
        <div className="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Porsche_Taycan_4S_IMG_3526.jpg/1200px-Porsche_Taycan_4S_IMG_3526.jpg" alt="" />
          <div className='content'>
            <h3>Porchse</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Luxury
