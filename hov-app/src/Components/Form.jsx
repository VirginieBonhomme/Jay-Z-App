import React from 'react'



export default function Form(props) {
  const { album, song, lyrics } = props.input

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>Album</label>
        <input
          name="album"
          type="text"
          value={album}
          onChange={props.handleTextInput}
        />


        <label>Song</label>
        <input
          name="song"
          type="text"
          value={song}
          onChange={props.handleTextInput}
        />


        <label>Lyrics</label>
        <input
          name="lyrics"
          type="textarea"
          value={lyrics}
          onChange={props.handleTextInput}
        />

        <button>{props.type}</button>
      </form>
    </div>
  )
}
