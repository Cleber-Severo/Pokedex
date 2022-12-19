import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from './components/loading';
import Navbar from './components/navbar';
import PokemonCard from './components/PokemonCard';

import './components/styles/styles.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPokemons = async () => {
    try {
      var endpoints = [];
      for (var i = 1; i < 200; i++) {
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
          console.log(pokemon.data);
          return <PokemonCard key={order} name={name} image={sprites.front_default} />
        })}
      
      </section>
      
    </div>
    )
}


export default App;
