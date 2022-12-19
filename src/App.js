import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from './components/loading';
import Navbar from './components/navbar';
import PokemonCard from './components/PokemonCard';

import './components/styles/styles.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  const colours = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };

  const getPokemons = async () => {
    try {
      var endpoints = [];
      for (var i = 1; i < 500; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      await axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemonData(res));
      setLoading(false);
    } catch (error) {
      setLoading(true);
    }
  };

  useEffect(() => {
    getPokemons()
  }, [])

  if(loading){
    return <Loading/>
  }

  return (
    <div className="App">
      <Navbar/>
      {console.log(pokemonData)}
      <section className='pokemon-list' >
        {pokemonData.map( pokemon => {
          const {name, order, sprites} = pokemon.data;
          return <PokemonCard key={order} name={name} image={sprites.front_default}/>
        })}
      
      </section>
      
    </div>
    )
}


export default App;
