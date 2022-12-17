import './pokemoncard.css'

const PokemonCard = ({name, image}) => {
  return (
    <div className="pokemoncard">
        <p>{name}</p>
        <img src={image} />
    </div>
  )
}

export default PokemonCard