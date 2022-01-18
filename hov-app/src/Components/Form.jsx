import React from 'react'
import './Form.css'



export default function Form(props) {
  const { album, song, lyrics } = props.input

  return (
    <div className='main-form-container'>
      <h2>Share Your Favorite Jay-Z Lyrics</h2>
      <form onSubmit={props.handleSubmit}>
        <label>Album</label>
        <input
          name="album"
          type="text"
          className="favorite-input"
          value={album}
          onChange={props.handleTextInput}
        />
        <br />
        <label>Song</label>
        <input
          name="song"
          type="text"
          className="favorite-input"
          value={song}
          onChange={props.handleTextInput}
        />
        <br />
        <label>Lyrics</label>
        <input
          name="lyrics"
          type="textarea"
          className="favorite-input"
          value={lyrics}
          onChange={props.handleTextInput}
          style={{ height: "150px" }}
        />
        <br />
        <button>{props.type}</button>
      </form>
    </div>
  )
}
