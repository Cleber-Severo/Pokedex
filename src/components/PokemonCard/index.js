
import hexToRgba from 'hex-to-rgba';


const PokemonCard = ({name, image, color, type}) => {
  
  const pColor = {
    backgroundColor: color[type[0].type.name]
  };

  const typesHandler = () => {
    if(type[1]) {

    const p1Color = {backgroundColor: color[type[1].type.name]};

    return( 
      <div className='type' >
        <p style={pColor}>{type[0].type.name}</p>
        <p style={p1Color}>{type[1].type.name}</p>
      </div>
      )
    }
    return <div className='type'><p style={pColor} >{type[0].type.name}</p></div>
  }
  
  return (
    <div className="pokemoncard" style={{ backgroundColor: hexToRgba(color[type[0].type.name], 0.8) }} >
        <img src={image} />
        <div className='pokemoncard__container'>
          <p className='pokemoncar__container--name'>{name}</p>
          {typesHandler()}
        </div>
    </div>
  )
}

export default PokemonCard