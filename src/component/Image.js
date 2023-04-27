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
    <Card sx={{pt:13.7,borderRadius:0}}>

      <CardActions sx={{ p:0, position: 'relative' }}>
        <CardMedia
          component="img"
          sx={{  height:220,fullwidth: 'false',minHeight:150 }}
          alt="image"
          image="https://echooling-react.vercel.app/static/media/1.444626c32f772f4850ee.jpg"
          title="green iguana" />
        <div style={{position: "absolute", color: "white",align:'center', verticalalign: 'middle', left: "50%", transform: "translateX(-50%)", }}>
          <Typography  sx={{ ml:1.5,textAlign:'center',fontSize:30,fontWeight:700,width:'90%',}}>About Us
          </Typography>
          <CardActions sx={{p:0}} >
            <Button sx={{  fontSize: 13, color: 'white', textTransform: 'capitalize' }} size="small">Home</Button>
            <Button startIcon={<LensIcon sx={{ width:10}}  />} sx={{ fontSize: 13, color: 'white', textTransform: 'capitalize', }} size="small">About Us</Button>
          </CardActions>
        </div>


      </CardActions>
    </Card>
  );
}

export default MediaCard;