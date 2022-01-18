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

export default function NobodyWins() {
  const [bars, setBars] = useState([])
  const [input, setInput] = useState(defaultInput)
  const [toggle, setToggle] = useState(false)



  useEffect(() => {
    const fetchLyrics = async () => {
      const res = await api.get();
      const filteredBars = res.data.records.filter(bars => {
        if (bars.fields.category === "Nobody Wins") {
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
      category: "Nobody Wins"
    }));
  };

  return (
    <div className='Nobody Wins-container'>
      <Header
        title="Hov-Said-What?"
        button="Home"
        route="/"
      />
      <h2>Nobody Wins When The Family Feuds</h2>
      <div className='paragraph-container'>
        <p>Jay reminds us  “Let no amount of money ruin this thing of ours.”Here are some bars to remind us that money isn’t worth much with out the ones you love.
        </p>
      </div>
      <div className='main-lyric-container'>
        {bars.map((bar) => {
          return (

            <div className='lyrics-container'>
              <h4>{bar.fields?.lyrics}</h4>
              <h4>Album: {bar.fields?.album}</h4>
              <h4>Song: {bar.fields?.song}</h4>
              <br />
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
