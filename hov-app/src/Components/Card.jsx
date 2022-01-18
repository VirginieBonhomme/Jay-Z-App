import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'


export default function Card(props) {
  const { imageURL, title, description, button, route } = props;

  return (
    <div className='card-container'>
      <div className='card-content'>
        <div className='image-container'>
          <img className='home-image' src={imageURL} alt='Jay-Z with in suits' />
        </div>
        <div className='title-container'>
          <h3>{title}</h3>
        </div>
        <div className='description-container'>
          <p>{description}</p>
        </div>
        <div className='button-container'>
          <Link className='card-button' to={route}><button>{button}</button></Link>
        </div>
        <div />
      </div>
    </div>

  )
}
