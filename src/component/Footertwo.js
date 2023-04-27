
import React from 'react';
// import logo from './src/Aboutus.jpg';
// import aboutuslogo from '../src/Aboutus.jpg'
import { AppBar, Toolbar, Grid, Typography, List, ListItem, ListItemText, TextField, ListItemButton } from '@mui/material';
// import ListItemButton from '@mui/material';
import Link from '@mui/material/Link';
// import aboutuslogo from '../src/Aboutus.jpg'
// import logo from '../src/Logo.png';
import Logotry from '../Logotry';

const Footer = () => {
  return (
    <AppBar position="static" sx={{bgcolor:'#212529',pt:'100px'}}>
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={8} sm={6} md={3} >          
              <Logotry ></Logotry>            
            <List>
              <ListItem>
                <Typography sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              
              color: 'inherit',
              textDecoration: 'none',
            }}>There are course and event custom
                post types so you can easily create and
                manage course, events.
                
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary="+(402) 762 441 83" />
              </ListItem>
              <ListItem>
                <ListItemText primary="info@echooling.com" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" color="inherit">
              About Us
            </Typography>
            <List disablePadding>
              
              <ListItem>
                <ListItemText primary={<Link underline="hover" color="inherit" href="https://preview.themeforest.net/item/echooling-education-react-template/full_screen_preview/43914749">About</Link>} />
              </ListItem>
              <ListItem>
                <ListItemText primary={<Link underline="hover" color="inherit" href="https://preview.themeforest.net/item/echooling-education-react-template/full_screen_preview/43914749">Courses</Link>} />
              </ListItem>
              <ListItem>
                <ListItemText primary={<Link underline="hover" color="inherit" href="https://preview.themeforest.net/item/echooling-education-react-template/full_screen_preview/43914749">Events</Link>} />
              </ListItem>
              <ListItem>
                <ListItemText primary={<Link underline="hover" color="inherit" href="https://preview.themeforest.net/item/echooling-education-react-template/full_screen_preview/43914749">Career</Link>} />
              </ListItem> <ListItem>
                <ListItemText primary={<Link underline="hover" color="inherit" href="https://preview.themeforest.net/item/echooling-education-react-template/full_screen_preview/43914749">Become a Teacher</Link>} />
              </ListItem>
              <ListItem>
                <ListItemText primary={<Link underline="hover" color="inherit" href="#">Contact</Link>} />
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" color="inherit">
              Useful Links
            </Typography>
            <List disablePadding >
              
              <ListItem>
                <ListItemText primary={<Link underline="hover" color="inherit" href="https://preview.themeforest.net/item/echooling-education-react-template/full_screen_preview/43914749">Browse Library</Link>} />
              </ListItem>
              <ListItem>
                <ListItemText primary={<Link underline="hover" color="inherit" href="https://preview.themeforest.net/item/echooling-education-react-template/full_screen_preview/43914749">Library</Link>} />
              </ListItem>
              <ListItem>
                <ListItemText primary={<Link underline="hover" color="inherit" href="https://preview.themeforest.net/item/echooling-education-react-template/full_screen_preview/43914749">Partners</Link>} />
              </ListItem>
              <ListItem>
                <ListItemText primary={<Link underline="hover" color="inherit" href="https://preview.themeforest.net/item/echooling-education-react-template/full_screen_preview/43914749">News & Blog</Link>} />
              </ListItem> <ListItem>
                <ListItemText primary={<Link underline="hover" color="inherit" href="https://preview.themeforest.net/item/echooling-education-react-template/full_screen_preview/43914749">Become a Teacher</Link>} />
              </ListItem>
              <ListItem>
                <ListItemText primary={<Link underline="hover" color="inherit" href="#">Contact</Link>} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body1" color="inherit">
            Newsletter
            </Typography>
            <List>
              <ListItem>
                <Typography sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              
              color: 'inherit',
              textDecoration: 'none',
            }}>There are course and event custom
                post types so you can easily create and
                manage course, events.
                
                </Typography>
              </ListItem>
              <ListItem>
              <TextField label="Email" variant="outlined" fullWidth />
              </ListItem>
              
              </List>
            
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

