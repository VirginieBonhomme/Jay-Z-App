// import { Routes, Route } from "react-router-dom";
import './App.css';
import HovImg1 from './Img/Hov-1.jpg';
import HovImg2 from './Img/Hov-2.jpg';
import HovImg3 from './Img/Hov-3.jpg';
import HovImg4 from './Img/Hov-4.jpg';
import Header from './Components/Header.jsx'
import Card from './Components/Card.jsx'


function App() {
  return (
    <div className="container">
      <Header />
      <Card
        imageURL={HovImg1}
        title="The BluePrint"
        description=
        "Being the first of many Jay-Z is a clear blueprint on all things successful. 
        Here are some bars that will inspire you to craft your own blueprint"
      />
       <Card
        imageURL={HovImg2}
        title="Friends or Foes"
        description=
        " the ablilty to move in a room full of vultures is not only a skill but can also be life saving.
         Here are some bars to keep you on your toes. "
      />
       <Card
        imageURL={HovImg3}
        title="Nobody Wins When the 
        Family Feuds"
        description=
        "Jay reminds us  “Let no amount of money ruin this thing of ours.
        ”Here are some bars to remind us that money isn’t worth much with out the ones youlove."
      />
       <Card
        imageURL={HovImg4}
        title="Legacy, Legacy, Legacy "
        description=
        "Generational wealth that’s the key. 
        Here are some Jigga bars that can inspire your money moves. "
      />
    </div>
  );
}

export default App;
