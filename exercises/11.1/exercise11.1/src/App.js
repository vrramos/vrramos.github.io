import React from 'react';
import data from './data';
import './App.css';
// import Pokedex from './components/pokedex'
import Pokemons from './components/pokemons'
import Button from './components/button'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      position: 1
    }
  }

  nextPokemon = () => {
    if (this.state.position === data.length - 1) {
      this.setState({ position: 0 })
    } else {
      this.setState(state => ({
        position: state.position + 1
      }))
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokemons pokemon={data[this.state.position]} />
        <Button nextPokemonPosition={this.nextPokemon} />
        {/* <Pokedex pokemons={data} /> */}
      </div>
    );
  }
}

export default App;
