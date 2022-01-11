import React from 'react'
import './Card.css'

export default function Card(props) {
  const { imageURL, title, description } = props;
  return (
    <div className='card-container'>
      <div className='card-content'>
        <div className='image-container'>
          <img src={imageURL} alt='' />
        </div>
        <div className='title-container'>
          <h3>{title}</h3>
        </div>
        <div className='description-container'>
          <p>{description}</p>
        </div>
        <div className='button-container'>
          <button>Click Me</button>
        </div>
        <div />
      </div>
    </div>

  )
}
