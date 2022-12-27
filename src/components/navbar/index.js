import React from 'react'
import SelectPokemon from '../SelectPokemon';

const Navbar = ({filterPokemon, setCurrentPage, filterPokemonPerType}) => {
  return (
    <nav className='Navbar' >
        
        <div className='logo-select'>
          <h3  onClick={() => window.location.reload() }>POKEMON</h3> 

          <SelectPokemon filterPokemonPerType={filterPokemonPerType} />
        </div>

        <input 
          onChange={(e) => {
            filterPokemon(e.target.value);
            setCurrentPage(1);
            }} 
          type='text' 
          placeholder='Search for pokemon'
        />
    </nav>
  )
}

export default Navbar
