import * as React from 'react';
import Homemenu from './navMenu/Homemenu'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import Envatomarket from './navMenu/Envatomarket';
import SearchAppBar from './Searchbar';
import Pagemenu from './navMenu/Pagemenu';
import Coursesmenu from './navMenu/Courses';

import Categoriesmenu from './navMenu/Categories';
import Contactmenu from './navMenu/Contactmenu';
import Logotry from '../Logotry';
import { KeyboardArrowDown } from '@mui/icons-material';
import SimpleMenu from './SimpleMenu';

// import logo from '../src/Logo.png';

// const theme = createTheme({
//   palette: {
//     primary: blue,
//   },
//   custom: {
//     back: '#ffa726',
//     main: '#f57c00',
//     dark: '#ef6c00',
//     contrastText: 'rgba(0, 0, 0, 0.87)',
//   },
// });

const pages = [<Categoriesmenu/>,<Homemenu/>,<Pagemenu/>,<Coursesmenu/>,<Contactmenu/>];  
// <Pagemenu/>,<Homemenu/>,  <Coursesmenu/>,<Blogmenu/>,<Contactmenu/>,<Categoriesmenu />,


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    
    <AppBar sx={{justifyContent:'center',background : 'white', }}>
      <Envatomarket></Envatomarket>
      <Container disableGutters  >
        <Toolbar  disableGutters sx={{ml:1.7,mr:0,cursor:'pointer',bgcolor:'white'}}>
                                                        {/* disableGutters */}
        <Logotry ></Logotry>
 {/* full screen */}
          <Box  sx={{ml:7.6,flexGrow: 1,textAlign: 'center', display: { xs: 'none', md: 'flex' }, }}>
            {pages.map((page) => (
              <Button  
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ml:0.5,cursor:'pointer',  }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* <SimpleMenu/> */}
          <SearchAppBar />

          {/* mobile screen */}
          <div style={{}}>
          <Box sx={{ alignItems:'center', maxwidth: 991,flexGrow: 1,display: { xs: 'flex', md: 'none' } , background : blue }}>
            <IconButton sx={{background :'blue'}}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'block' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          </div>
          
          
         
        </Toolbar>
      </Container>
    </AppBar>
    
  );
}
export default ResponsiveAppBar;


