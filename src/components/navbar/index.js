import React from 'react'

const Navbar = ({filterPokemon}) => {
  return (
    <nav className='Navbar' >
        <h3>POKEMON</h3>
        <input onChange={(e) => {filterPokemon(e.target.value)}} type='text' placeholder='Search for pokemon'/>
    </nav>
  )
}

export default Navbar
