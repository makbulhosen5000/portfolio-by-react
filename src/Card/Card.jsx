import React from 'react'
import './Card.css';

function Card({emoji,heading,details}) {
  return (
    <div className='card'>
        <img src={emoji} alt="" />
        <span style={{ fontWeight:'bold' }}>{heading}</span>
        <span>{details}</span>
        <a href='https://www.w3schools.com/' target="_blank"><button className='c-button'>LEARN MORE</button></a> 
    </div>
  )
}

export default Card