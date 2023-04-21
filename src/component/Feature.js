import * as React from 'react';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import First from './FeatureImage/First';
import Logotry from '../Logotry';
import Second from './FeatureImage/Second';
import Third from './FeatureImage/Third';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [0, 1, 2];
const Headingtext =['Accredited Campus','Best Quality Graduate','Inspiring Student Life']
const images=[<First/>,<Second/>,<Third/>]


const theme = createTheme();

function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#f2f4f9',
            // '#f2f4f9'
            pt: 10,
            pb: 1,
          }}
        >
          <Container  maxWidth="sm">
            <Typography
              component="h1"
              variant="h6" fontWeight={600} fontSize={15}
              align="center"
              color="#d2093c"
              gutterBottom 
            >
              Echooling available courses
            </Typography>
            <Typography variant="h4"  fontFamily={'sans-serif'} align="center" lineHeight={1.5} fontWeight={800} color="#0f1216" paragraph>
            Online Coaching Lessons For Remote Learning
            </Typography>
          </Container>
        </Box>
        <Box sx={{bgcolor:'yellowgreen'}}>
        <Container  sx={{bgcolor: '#f2f4f9' }} maxWidth="full">
          {/* End hero unit */}
          <Grid sx={{bgcolor: '#f2f4f9'}} container spacing={2} >
            {cards.map((card) => (
              <Grid  item key={card} xs={14} sm={6} md={4}  >
                <Card 
                  sx={{pt:4,bgcolor: 'white',borderRadius:2 , display: 'flex', flexDirection: 'column' }}
                >
                 <Container sx={{}}>
                    {images[card]}
                 </Container>
                  
                  <CardContent sx={{p:3, flexGrow: 1 }}>
                    <Typography sx={{fontSize:15,fontWeight:700}}
                     gutterBottom variant="h6" component="h5">
                      
                      {Headingtext[card]}
                    </Typography>
                    <Typography>
                    Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia eget consectetur sed,convallis at tellus.
                    </Typography>
                    <CardActions>
                    <Button endIcon={<ArrowForwardIcon/>} sx={{fontSize:12, textTransform:'capitalize'}}  href="#text-buttons">Learn more</Button>
                  </CardActions>
                  </CardContent>
                 
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container sx={{bgcolor:'yellow'}}></Container>
        </Box>
      </main>
      {/* Footer */}
      {/* <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box> */}
      {/* End footer */}
    </ThemeProvider>
  );
}
export default Album;