import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";



export default function Header(props) {
  const { button, route, title } = props;

  return (
    <div className='header-container'>
      <div className='home-title-container'>
        <h1>{title}</h1>
      </div>
      <div className='home-button-container'>
        <Link to={route}><button>{button}</button></Link>
      </div>
    </div>
  )
}
