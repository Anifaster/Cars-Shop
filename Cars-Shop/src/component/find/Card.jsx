import React from 'react'
import './Find.css'
const Card = ({image, make}) => {
  return (
    <div className='card'>
        <img src={image} alt="" />
        <p>{make}</p>
    </div>
  )
}

export default Card
