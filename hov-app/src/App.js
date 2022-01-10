// import { Routes, Route } from "react-router-dom";
import './App.css';
import HovImg1 from './Img/Hov-1.jpg';
import HovImg2 from './Img/Hov-2.jpg';
import HovImg3 from './Img/Hov-3.jpg';
import HovImg4 from './Img/Hov-4.jpg';
import Header from "./Components/Header.jsx"

function App() {
  return (
    <div className="App">
      <Header />
      <container>
        <h1>Gather Around Hustlers... </h1>
        <p>
          That’s if your interested in picking up some inspirational gems from Brooklyn’s own wordsmith Jay-Z.
          From Marcy to Madison square Jay-z has proven that success starts from with in.
          With his wit and in-depth self reflection Jigga man has inspired many through his introspective raps.
        </p>
        <section>
          <div>
            <img src={HovImg1} alt="Picture of Jay-z with blue tint" width="100" height="50" />
            <h2>The BluePrint</h2>
            <p>
              Being the first of many Jay-Z is a clear blueprint on all things successful.
              Here are some bars that will inspire you to craft your own blueprint.
            </p>
            <button>Click Me</button>
          </div>
          <div>
            <img src={HovImg2} alt="Picture of Jay-z with blue tint" width="100" height="50" />
            <h2>The BluePrint</h2>
            <p>
              Being the first of many Jay-Z is a clear blueprint on all things successful.
              Here are some bars that will inspire you to craft your own blueprint.
            </p>
            <button>Click Me</button>
          </div>
          <div>
            <img src={HovImg3} alt="Picture of Jay-z with blue tint" width="100" height="50" />
            <h2>The BluePrint</h2>
            <p>
              Being the first of many Jay-Z is a clear blueprint on all things successful.
              Here are some bars that will inspire you to craft your own blueprint.
            </p>
            <button>Click Me</button>
          </div>
          <div>
            <img src={HovImg4} alt="Picture of Jay-z with blue tint" width="100" height="50" />
            <h2>The BluePrint</h2>
            <p>
              Being the first of many Jay-Z is a clear blueprint on all things successful.
              Here are some bars that will inspire you to craft your own blueprint.
            </p>
            <button>Click Me</button>
          </div>
        </section>
      </container>
    </div>
  );
}

export default App;
