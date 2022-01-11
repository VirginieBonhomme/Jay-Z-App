import React from 'react'


export default function Form(props) {
  const { album, song, lyrics } = props
  return (
    <div>
      <form>
        <lable>Album</lable>
        <input>
          type="text"
          value={album}
        </input>
      </form>
    </div>
  )
}
