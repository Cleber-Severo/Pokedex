import axios from 'axios';
import { useEffect, useState } from 'react';
import PokemonCard from './components/PokemonCard';



function App() {
  const [pokemonData, setPokemonData] = useState([]);

   const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 100; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemonData(res));
  };

  useEffect(() => {
    getPokemons()
  }, [])


  return (
    <div className="App">
      
      {console.log(pokemonData)}
      <section className='pokemon-list' >
        {pokemonData.map( pokemon => {
          const {name, order, sprites} = pokemon.data;
          return <PokemonCard key={order} name={name} image={sprites.front_default} />
        })}
      
      </section>
      
    </div>
    )
}


export default App;
