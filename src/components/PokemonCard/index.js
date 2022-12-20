
import hexToRgba from 'hex-to-rgba';


const PokemonCard = ({name, image, color, type}) => {
  
  
  return (
    <div className="pokemoncard" style={{ backgroundColor: hexToRgba(color[type], 0.8) }} >
        {console.log(type)}
        <img src={image} />
        <p>{name}</p>
        <p style={{ backgroundColor: color[type]}} >{type}</p>
    </div>
  )
}

export default PokemonCard