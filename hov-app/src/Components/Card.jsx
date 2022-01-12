// import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Card.css'

// const defaultInput = {
//   category: "",
//   song: ""
// }
export default function Card(props) {
  const { imageURL, title, description, button, route } = props;
  // const [input, setInput] = useState(defaultInput)
  // useEffect(() => {
  //   setInput((prevState) => ({
  //     ...prevState,
  //     category: button
  //   }))
  // }, [])

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
          <Link to={route}><button>{button}</button></Link>
        </div>
        <div />
      </div>
    </div>

  )
}
