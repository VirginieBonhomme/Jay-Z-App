import { Routes, Route } from 'react-router-dom';
import './App.css';
import Blueprint from './Components/Blueprint.jsx';
import NobodyWins from './Components/NobodyWins.jsx';
import FriendsOrFoes from './Components/FriendsOrFoes.jsx';
import Legacy from './Components/Legacy';
import HomePage from './Components/HomePage';




function App() {
  return (
    <div className="container">


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bars/blueprint" element={<Blueprint />} />
        <Route path="/bars/friendsorfoes" element={<FriendsOrFoes />} />
        <Route path="/bars/nobodywins" element={<NobodyWins />} />
        <Route path="/bars/legacy" element={<Legacy />} />
      </Routes>


    </div>
  );
}

export default App;
