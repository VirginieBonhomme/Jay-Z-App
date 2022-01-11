import React from 'react'
import HovHeader from '../Img/BlueHov1.jpg';
// import { Link } from "react-router-dom";



export default function Header() {
  return (
    <div className='header-container'>
      <div className='button-container'>
        <button>Home</button>
      </div>
      <div className='image-container'>
        <img src={HovHeader} alt="Picture of Jay-z with blue tint" />
      </div>

    </div>
  )
}
