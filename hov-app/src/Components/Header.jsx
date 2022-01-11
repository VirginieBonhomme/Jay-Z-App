import React from 'react'
import HovHeader from '../Img/BlueHov1.jpg';
import './Header.css';
import { Link } from "react-router-dom";



export default function Header(props) {
  const { homeButton, route2 } = props;
  return (
    <div className='header-container'>
      <div className='button-container'>
        <Link to={route2}><button>{homeButton}</button></Link>
      </div>
      <div className='headerimage-container'>
        <img src={HovHeader} alt="Picture of Jay-z with blue tint" />
      </div>

    </div>
  )
}
