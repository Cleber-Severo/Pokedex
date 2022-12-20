
import hexToRgba from 'hex-to-rgba';


const PokemonCard = ({name, image, color, type}) => {
  
  const pColor = {
    backgroundColor: color[type[0].type.name]
  };

  const typesHandler = () => {
    if(type[1]) {

    const p1Color = {backgroundColor: color[type[1].type.name]};

    return( 
      <div>
        <p style={pColor}>{type[0].type.name}</p>
        <p style={p1Color}>{type[1].type.name}</p>
      </div>
      )
    }
    return <p style={pColor} >{type[0].type.name}</p>
  }
  
  return (
    <div className="pokemoncard" style={{ backgroundColor: hexToRgba(color[type[0].type.name], 0.8) }} >
        <img src={image} />
        <p>{name}</p>
        {/* <p style={{ backgroundColor: color[type]}} >{type}</p> */}
        {typesHandler()}
    </div>
  )
}

export default PokemonCard