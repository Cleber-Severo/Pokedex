import * as React from 'react';
import {useState } from 'react';

import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


import hexToRgba from 'hex-to-rgba';
import {AiFillInfoCircle} from 'react-icons/ai'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PokemonCard = ({name, image, color, type, stats, species}) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [firstPokemon, setFirstPokemon] = useState([]);
  const [secondPokemon, setSecondPokemon] = useState([]);
  const [thirdPokemon, setThirdPokemon] = useState([]);
  const [pokemonImage, setPokemonImage] = useState([]);

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

  const speciesCall = async () => {
    const pokeImg = []
    const res = await axios.get(species.url);
    const chain = await axios.get(res.data.evolution_chain.url);
    const chainInfo = chain.data.chain;

    console.log(chainInfo);

    const chainFirstPokemon =  await axios.get(chainInfo.species.url);
    const chainSecondPokemon = await axios.get(chainInfo.evolves_to[0].species.url);
    const chainThirdPokemon = await axios.get(chainInfo.evolves_to[0].evolves_to[0].species.url);

    const resFirstPokemon = await axios.get( 'https://pokeapi.co/api/v2/pokemon/'+chainFirstPokemon.data.name);
    const resSecondPokemon = await axios.get( 'https://pokeapi.co/api/v2/pokemon/'+chainSecondPokemon.data.name);
    const resThirdPokemon = await axios.get( 'https://pokeapi.co/api/v2/pokemon/'+chainThirdPokemon.data.name);

    pokeImg.push(resFirstPokemon.data.sprites.front_default);
    pokeImg.push(resSecondPokemon.data.sprites.front_default);
    pokeImg.push(resThirdPokemon.data.sprites.front_default);


    // console.log(resFirstPokemon.data);
    // console.log(resFirstPokemon.data.name);
    console.log(resFirstPokemon.data.sprites);
    // console.log(resSecondPokemon.data);
    // console.log(resThirdPokemon.data);

    setPokemonImage(pokeImg);

    setFirstPokemon(pokeImg[0]);
    setSecondPokemon(pokeImg[1]);
    setThirdPokemon(pokeImg[2]);


    // console.log(chainFirstPokemon.data.name);
    // console.log(chainSecondPokemon.data);
    // console.log(chainThirdPokemon.data);


  }

  return (

    

    <div className="pokemoncard" style={{ backgroundColor: hexToRgba(color[type[0].type.name], 0.6) }} >
      <AiFillInfoCircle className='pokemoncard__icon' onClick={() => {
        handleOpen();
        speciesCall();
        
      }}/>
      <img src={image} />
      <div className='pokemoncard__container'>
        <p className='pokemoncar__container--name'>{name}</p>
        {typesHandler()}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Box className='containter-box' >
            <Typography id="modal-modal-title" className='modal__header' variant="h6" component="h2">
              <p>{name}</p>
              <img src={image} alt="" style={{display: 'block'}} />
            </Typography>
            <Box id="modal-modal-description" className='status' sx={{ mt: 2 }}>
                <p><span>{stats[0].stat.name}: </span><span>{stats[0].base_stat}</span></p>
                <p><span>{stats[1].stat.name}: </span><span>{stats[1].base_stat}</span></p>
                <p><span>{stats[2].stat.name}: </span><span>{stats[2].base_stat}</span></p>
                <p><span>{stats[3].stat.name}: </span><span>{stats[3].base_stat}</span></p>
                <p><span>{stats[4].stat.name}: </span><span>{stats[4].base_stat}</span></p>
                <p><span>{stats[5].stat.name}: </span><span>{stats[5].base_stat}</span></p>
            </Box>
          </Box>



          <Box>

            
            <div className='status__imgs' >

              {/* {
              pokemonImage.map( item => {
                console.log(item);
                <img src={item} alt="a" />
              })} */}

              <img src={firstPokemon} alt="" />
              <img src={secondPokemon} alt="" />
              <img src={thirdPokemon} alt="" />
            </div>
          </Box>
        </Box>
      </Modal>

    </div>
  )
}

export default PokemonCard