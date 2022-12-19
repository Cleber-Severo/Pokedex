
const PokemonCard = ({name, image}) => {
  return (
    <div className="pokemoncard">
        <img src={image} />
        <p>{name}</p>
    </div>
  )
}

export default PokemonCard