import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography, capitalize } from '@mui/material';
import LensIcon from '@mui/icons-material/Lens';
// import Aboutus from '../src/component/Aboutus.jpg'

function MediaCard() {
  return (
    <Card sx={{ fullwidth: 'true',}}>

      <CardActions sx={{ p:0, position: 'relative' }}>
        <CardMedia
          component="img"
          sx={{ height: 'full', fullwidth: 'false' }}
          alt="image"
          image="https://echooling-react.vercel.app/static/media/1.444626c32f772f4850ee.jpg"
          title="green iguana" />
        <div style={{ position: "absolute", color: "white", verticalalign: 'middle', left: "50%", transform: "translateX(-50%)", }}>
          <Typography sx={{ fontSize: 50, }}>About Us
          </Typography>
          <CardActions>
            <Button sx={{ fontSize: 15, color: 'white', textTransform: 'capitalize' }} size="small">Home</Button>
            <Button startIcon={<LensIcon fontSize="small" />} sx={{ fontSize: 15, color: 'white', textTransform: 'capitalize' }} size="small">About Us</Button>
          </CardActions>
        </div>


      </CardActions>
    </Card>
  );
}

export default MediaCard;
