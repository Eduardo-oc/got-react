import React from 'react';
import './App.scss';
import HousePage from './components/pages/HousePage/HousePage';
import Routing from './components/shared/utils/Routing/Routing';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from './pages/HomePages/HomePage';
// import NavBar from './components/shared/utils/NavBar/NavBar';
// import CharacterPage from './pages/CharactersPages/CharacterPage';
// import CharacterDetaills from './pages/CharactersPages/CharacterDetaills/CharacterDetaills';
// import HouseDetaills from './pages/HousePages/HouseDetaills/HouseDetaills';
// import HousePage from './pages/HousePages/HousePage';
// import ChronoPage from './pages/ChronoPages/ChronoPage';

function App() {
  return (

    <div className="App">
      <header className="App-header">

        <Routing />
        <HousePage></HousePage>

      </header>
    </div>

  );
}

export default App;
