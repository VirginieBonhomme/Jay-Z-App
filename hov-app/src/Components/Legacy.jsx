import { useState, useEffect } from 'react'
import api from '../services/apiConfig/index.js'
import Form from './Form'
import Header from './Header.jsx'


const defaultInput = {
  category: "",
  song: "",
  album: "",
  lyrics: ""
}

export default function Legacy() {
  const [bars, setBars] = useState([])
  const [input, setInput] = useState(defaultInput)
  const [toggle, setToggle] = useState(false)



  useEffect(() => {
    const fetchLyrics = async () => {
      const res = await api.get();
      const filteredBars = res.data.records.filter(bars => {
        if (bars.fields.category === "Legacy") {
          return (bars)
        }
      })
      setBars(filteredBars);
    };
    fetchLyrics();
  }, [toggle]);



  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = input;
    const res = await api.post("", { fields });
    setInput(defaultInput);
    setToggle(prevToggle => !prevToggle)
  };

  const handleTextInput = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
      category: "Legacy"
    }));
  };

  return (
    <div className='blueprint-container'>
      <Header
        title="Hov-Said-What?"
        button="Home"
        route="/"
      />
      <h2>Legacy, Legacy, Legacy</h2>
      <div className='paragraph-container'>
        <p>Generational wealth that’s the key. Here are some Jigga bars that can inspire your money moves.</p>
      </div>
      <div className='main-lyric-container'>
        {bars.map((bar) => {
          return (
            <div className='lyrics-container'>
              <div>
                <h4>{bar.fields?.lyrics}</h4>
                <h4>Album: {bar.fields?.album}</h4>
                <h4>Song: {bar.fields?.song}</h4>
                <br />
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
