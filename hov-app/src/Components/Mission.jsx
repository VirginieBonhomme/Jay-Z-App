import React from 'react'
import './Mission.css';
export default function Mission(props) {
  const { statment } = props
  return (
    <div className='mission-container'>
      <p>{statment}</p>
    </div>
  )
}
