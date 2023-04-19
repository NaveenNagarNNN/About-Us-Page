import * as React from 'react';
import AppBar from '@mui/material/AppBar';
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
const Headingtext =[' (26 Reviews) ',' (16 Reviews) ',' (14 Reviews) ',' (36 Reviews) ']


const theme = createTheme();

function StudentFeedback() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
          Echooling available courses
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main color='white'>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#f2f4f9',
            pt: 12,
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
              Student Satisfaction
            </Typography>
            <Typography variant="h4"  fontFamily={'sans-serif'} align="center" lineHeight={1.5} fontWeight={800} color="#0f1216" paragraph>
            Student Community Feedback
            </Typography>
          </Container>
        </Box>

        <Container  sx={{ py: 8,bgcolor: '#f2f4f9' }} maxWidth="full">
          {/* End hero unit */}
          <Grid sx={{}} container spacing={4} >
            {cards.map((card) => (
              <Grid  spacing={0} item key={card} xs={14} sm={6} md={4}  >
                <Card 
                  sx={{borderRadius:4 ,height: '100%',m:2,pt:10, display: 'flex', flexDirection: 'column' }}
                >
                  
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom align="left" variant="h5" component="h2">
                      {Headingtext[card]}
                    </Typography>
                    <Typography>
                    We are a Portsmouth based web design and e-marketing agency. We understand how important a website is to any business, big or small. Your online presence is now more important than ever before.
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
export default StudentFeedback;