import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { Box } from '@mui/material';


 function Logo() {
  return (
    <div>
    {/* <img src='./Logo.png'></img> */}
    <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://drive.google.com/file/d/1qjKj21IJPEjCm17W1UxMQwgUPXnWzwda/view"
      />
    {/* <Card sx={{ maxWidth: 345 }}>
      <CardActions>
      <CardMedia
        sx={{ height: 200 }}
        image=""
        title="green iguana"
      />
      </CardActions>
    </Card> */}
    </div>
  );
}
export default  Logo;