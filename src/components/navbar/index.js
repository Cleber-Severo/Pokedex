import React from 'react'

const Navbar = ({filterPokemon, setCurrentPage}) => {
  return (
    <nav className='Navbar' >
        <h3  onClick={() => window.location.reload() }>POKEMON</h3>
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
