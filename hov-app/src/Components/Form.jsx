import React from 'react'



export default function Form(props) {
  const { album, song, lyrics } = props.input

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <lable>Album</lable>
        <input>
          type="text"
          value={album}
          onChange={props.handleTextInput}
        </input>
        <lable>Song</lable>
        <input>
          type="text"
          value={song}
          onChange={props.handleTextInput}
        </input>
        <lable>Album</lable>
        <input>
          type="textarea"
          value={lyrics}
          onChange={props.handleTextInput}
        </input>
        <button>{props.type}Submit</button>
      </form>
    </div>
  )
}
