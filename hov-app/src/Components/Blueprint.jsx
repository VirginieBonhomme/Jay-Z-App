import { useState, useEffect } from 'react'
import api from '../services/apiConfig/index.js'
import Form from './Form'
import Header from './Header.jsx'
import './Blueprint.css'
import './Form.css'

const defaultInput = {
  category: "",
  song: "",
  album: "",
  lyrics: ""
}

export default function Blueprint() {
  const [bars, setBars] = useState([])
  const [input, setInput] = useState(defaultInput)
  const [toggle, setToggle] = useState(false)



  useEffect(() => {
    const fetchLyrics = async () => {
      const res = await api.get();
      const filteredBars = res.data.records.filter(bars => {
        return bars.fields.category === "The Blueprint"

      })
      setBars(filteredBars);
    };
    fetchLyrics();
  }, [toggle]);



  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = input;
    await api.post("", { fields });
    setInput(defaultInput);
    setToggle(prevToggle => !prevToggle)
  };

  const handleTextInput = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
      category: "The Blueprint"
    }));
  };

  return (
    <div className='blueprint-container'>
      <Header
        title="Hov-Said-What?"
        button="Home"
        route="/"
      />
      <h2>The Blueprint</h2>
      <div className='paragraph-container'>
        <p>Being the first of many Jay-Z is a clear blueprint on all things successful. Here are some bars that will inspire you to craft your own blueprint.</p>
      </div>
      <div className='main-lyric-container'>
        {bars.map((bar) => {
          return (
            <div key={bar.id}>
              <div className='lyrics-container'>
                <h4>{bar.fields?.lyrics}</h4>
                <h4>Album: {bar.fields?.album}</h4>
                <h4>Song: {bar.fields?.song}</h4>
              </div>
            </div>
          );
        })}
      </div>
      <div className='form-container'>
        <Form
          input={input}
          handleTextInput={handleTextInput}
          handleSubmit={handleSubmit}
          type={"Submit"}
        />
      </div>
    </div>
  )
}
