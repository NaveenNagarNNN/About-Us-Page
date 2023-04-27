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
import { Avatar } from '@mui/material';

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

const cards = [0, 1, 2,3,4,5];
const Headingtext =['Jason Response','Jonquil Von','Piff Jenkins','Brian Cumin','Alan Fresco','Steve Bros']
const subheading =['Education Assistant','Teaching Assistant','Teacher','Lead Teacher','Teacher','Teacher']

const theme = createTheme();

function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    
      < >
     
        <Box
          sx={{
            // bgcolor: '#f2f4f9',
            pt: 8,
            pb: 8,
            ml:0
          }}>
          
        <Container sx={{m:0,border:'none'}} maxWidth="full">
          {/* End hero unit */}
          <Grid sx={{border:'none',elevation:0}} container spacing={0} >
          <Container  maxWidth="xs">
            <Typography
              component="h1"
              variant="h6" fontWeight={600} fontSize={15}
              align="center"
              sx={{mt:2}}
              color="#d2093c"
              gutterBottom 
            >
              Course Instructors
            </Typography>
            <Typography variant="h4"  fontFamily={'sans-serif'} align="center" lineHeight={1.5} fontWeight={800} color="#0f1216" paragraph>
            Meet our Class Instructor
            </Typography>
          </Container>

            {cards.map((card) => (
              <Grid sx={{border:'none',bgcolor:'white',elevation:0}}  item key={card} xs={15} sm={6} md={3}>
                <Card 
                  sx={{ ":hover":{
                    
                  },borderRadius:0,bgcolor:'white',m:0,pt:0, display: 'flex' }}
                >
                
                  <CardContent sx={{alignItems: 'center', flexGrow: 1, }}>
                  {/* <ListItemAvatar align="center"> */}
                  
                  <Stack direction="row" sx={{justifyContent: 'center',borderColor:'black'}} >
                  
                  <Avatar   sx={{border:'solid',border:5,borderColor:'white', mb:2,width: 100, height: 100}}  alt="Remy Sharp" src="https://echooling-react.vercel.app/static/media/9.11887f172e15a92977b3.jpg" />         
                        
                </Stack>
                  
                  {/* </ListItemAvatar> */}
                 
                          <Typography gutterBottom  component="h2" fontSize={15} fontWeight={700} lineHeight={0.5}
                          sx={{textAlign:'center'}}>
                          {Headingtext[card]}                            
                          </Typography>
                          <Typography gutterBottom component="h2" fontSize={14}
                          sx={{textAlign:'center',color:'#5b5f64'}}>                            
                          {subheading[card]}
                          </Typography>
                           
                    
                  </CardContent>
                 
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Box>
      </>
     
    </ThemeProvider>
  );
}
export default Album;