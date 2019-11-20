import React from 'react';
import pokemons from './data';
import './App.css';
import Pokedex from './components/pokedex'

function App() {
  return (
    <div className="App">
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
