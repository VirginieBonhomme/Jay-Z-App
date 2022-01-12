import { useState, useEffect } from 'react'
import api from '../services/apiConfig.js/index.js'
import Form from './Form'
import Header from './Header.jsx'
import Mission from './Mission.jsx'

const defaultInput = {
  category: "",
  song: "",
  album: "",
  lyrics: ""
}

export default function Blueprint() {
  const [bars, setBars] = useState([])
  const [input, setInput] = useState(defaultInput)




  useEffect(() => {
    const fetchLyrics = async () => {
      const res = await api.get();
      setBars(res.data.records.category[TheBlueprint].lyrics.song.album);
    };
    fetchLyrics();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = input;
    const res = await api.post({ fields });
    setInput(defaultInput);

  };

  const handleTextInput = (event) => {
    const { button } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      category: button
    }));
  };

  return (
    <div className='blueprint-container'>
      <Header />
      <h3>The Blueprint</h3>
      <Mission
        statement={"Being the first of many Jay-Z is a clear blueprint on all things successful. Here are some bars that will inspire you to craft your own blueprint."}
      />
      <div className='lyrics-container'>
        {bars.map((bars) => {
          return (<h4>{bars.fields.category[TheBlueprint].lyrics.song.album}</h4>);
        })}
      </div>
      <div>
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
