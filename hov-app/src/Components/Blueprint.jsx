import { useState, useEffect } from 'react'
import Form from './Form'

const defaultInput = {
  category: "",
  song: "",
  album: "",
  lyrics: ""
}

export default function Blueprint() {
  const [input, setInput] = useState(defaultInput)
  useEffect(() => {
    setInput((prevState) => ({
      ...prevState,
      // category: button
    }))
  }, [])
  return (
    <div>
      <Form />
    </div>
  )
}
