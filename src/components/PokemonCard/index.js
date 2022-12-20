
const PokemonCard = ({name, image, color, type}) => {
  
  return (
    <div className="pokemoncard" style={{ backgroundColor: color[type]}} >
        {console.log(type)}
        <img src={image} />
        <p>{name}</p>
        <p>{type}</p>
    </div>
  )
}

export default PokemonCard