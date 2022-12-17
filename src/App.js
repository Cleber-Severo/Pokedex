import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [pokemonData, setPokemonData] = useState('');

  const getPokemon = () => {
       
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then((res) => setPokemonData(res));
  }

  useEffect(() => {
    getPokemon();
  }, [])

if (pokemonData !== []){
    return (
    <div className="App">
      {console.log(pokemonData.data)}
      {/* {console.log(pokemonData.data.name)} */}
      {/* {console.log(pokemonData.data.types[0].type.name)} */}
      {/* <img src={pokemonData.data.sprites.front_shiny} ></img> */}
    </div>
  );
}
}

export default App;
