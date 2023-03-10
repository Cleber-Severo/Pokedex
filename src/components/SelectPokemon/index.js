import React from 'react'

const SelectPokemon = ({filterPokemonPerType}) => {
  return (
        <select name="Filter by type" id="" onChange={(e) => {filterPokemonPerType(e.target.value)}}>
            <option value="all">all</option>
            <option value="normal">normal</option>
            <option value="fire">fire</option>
            <option value="water">water</option>
            <option value="electric">electric</option>
            <option value="grass">grass</option>
            <option value="ice">ice</option>
            <option value="fighting">fighting</option>
            <option value="poison">poison</option>
            <option value="ground">ground</option>
            <option value="flying">flying</option>
            <option value="psychic">psychic</option>
            <option value="bug">bug</option>
            <option value="rock">rock</option>
            <option value="ghost">ghost</option>
            <option value="dragon">dragon</option>
            <option value="dark">dark</option>
            <option value="steel">steel</option>
            <option value="fairy">fairy</option>
        </select>
  )
}

export default SelectPokemon