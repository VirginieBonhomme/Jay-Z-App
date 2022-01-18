import React from 'react'
import Card from './Card.jsx';
import Mission from './Mission.jsx';
import Header from './Header.jsx';
import './HomePage.css'
import './Media.css';
import HovImg1 from '../Img/Hov-1.jpg'
import HovImg2 from '../Img/Hov-2.jpg';
import HovImg3 from '../Img/Hov-3.jpg';
import HovImg4 from '../Img/Hov-4.jpg';



export default function HomePage() {


  return (

    <div>
      <Header
        title="Hov-Said-What?"
        button="Home"
        route="/"
      />
      <h2>Gather around hustlers...</h2>
      <div className='mission-container'>
        <Mission
          statment={"That’s if your interested in picking up some inspirational gems from Brooklyn’s own wordsmith Jay-Z. From Marcy to Madison square Jay-z has proven that success starts from with in. With his wit and in-depth self reflection Jigga man has inspired many through his introspective raps."}
        />
      </div>
      <div className='home-card-container1'>
        <Card
          imageURL={HovImg1}
          title="The BluePrint"
          description={"Being the first of many Jay-Z is a clear blueprint on all things successful. Here are some bars that will inspire you to craft your own blueprint"}
          route="/bars/blueprint"
          button="The Blueprint"
        />

        <Card
          imageURL={HovImg3} alt='Black and white photo of Jay-Z'
          title="Nobody Wins When the 
        Family Feuds"
          description={"Jay reminds us  \“Let no amount of money ruin this thing of ours.\"Here are some bars to remind us that money isn’t worth much with out the ones you love."}
          route="/bars/nobodywins"
          button="Nobody Wins"
        />

        <Card
          imageURL={HovImg2} alt='Black and white photo of Jay-Z'
          title="Friends or Foes"
          description={"The ablilty to move in a room full of vultures is not only a skill but can also be life saving. Here are some bars to keep you on your toes."}
          route="/bars/friendsorfoes"
          button="Friends Or Foes"
        />

        <Card
          imageURL={HovImg4} alt='Black and white photo of Jay-Z and Beyonce.'
          title="Legacy, Legacy, Legacy "
          description={"Generational wealth that’s the key. Here are some Jigga bars that can inspire your money moves."}
          route="/bars/legacy"
          button="Legacy"
        />
      </div>
    </div>
  )
}
