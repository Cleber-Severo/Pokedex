import * as React from 'react';
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

const PokemonCard = ({name, image, color, type}) => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

    <div className="pokemoncard" style={{ backgroundColor: hexToRgba(color[type[0].type.name], 0.6) }} >
      <AiFillInfoCircle className='pokemoncard__icon' onClick={handleOpen}/>
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

    </div>
  )
}

export default PokemonCard