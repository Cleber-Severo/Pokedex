import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from './components/loading';
import Navbar from './components/navbar';
import Pagination from './components/pagination/Pagination';
import PokemonCard from './components/PokemonCard';

import './components/styles/styles.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonBackup, setPokemonBackup] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
 

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = pokemonData.slice(firstCardIndex, lastCardIndex);

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
      for (var i = 1; i < 900; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      await axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => {
        setPokemonData(res);
        setPokemonBackup(res);
      });
      setLoading(false);

    } catch (error) {
      setLoading(true);
    }
  };

  useEffect(() => {
    getPokemons()
  }, [])

  const filterPokemon = (value) => {
    const filteredPokemon = [];
    
    if(value === ''){
      setPagination(true);
      getPokemons();
      return;
    }

    for (var i in pokemonBackup) {
      if(pokemonBackup[i].data.name.includes(value)) {
        filteredPokemon.push(pokemonBackup[i]);       
      }
    }
    //console.log(filteredPokemon);
    setPokemonData(filteredPokemon);
  }

  const filterPokemonPerType = (type) => {
    const typeFiltered = [];
    if(type === 'all') {
      getPokemons();
    }
    
    for (var i in pokemonBackup) {
      if(pokemonBackup[i].data.types[0].type.name.includes(type)) {
        typeFiltered.push(pokemonBackup[i]);
      }
    }

    setPokemonData(typeFiltered);
  }

  if(loading){
    return <Loading/>
  }

  if(pagination){
    console.log(pokemonData)
    console.log(pokemonBackup)

    return (
      <div className="App">
        <Navbar filterPokemon={filterPokemon} filterPokemonPerType={filterPokemonPerType} setCurrentPage={setCurrentPage}/>
        
        <Pagination 
          pagesNum={pokemonData.length} 
          cardsPerPage={cardsPerPage} 
          changePage={setCurrentPage} 
          currentPage={currentPage}
        /> 

 
        <section className='pokemon-list' >
          {currentCards.map( pokemon => {
            const {name, order, sprites, types, stats, species} = pokemon.data;
            //console.log(pokemon.data)
            return <PokemonCard 
                      key={order} 
                      name={name} 
                      image={sprites.front_default} 
                      stats={stats}
                      color={colours} 
                      type={types}
                      species={species}
                    />
          })}

        
        </section>
        
      </div>
    )
  }

  return (
      <div className="App">
        <Navbar filterPokemon={filterPokemon} setCurrentPage={setCurrentPage} />
        
        <section className='pokemon-list' >
          {pokemonData.map( pokemon => {
            const {name, order, sprites, types} = pokemon.data;
          
            return <PokemonCard 
                      key={order} 
                      name={name} 
                      image={sprites.front_default} 
                      color={colours} 
                      type={types}/>
          })}

        
        </section>
        
      </div>
    )
}


export default App;
