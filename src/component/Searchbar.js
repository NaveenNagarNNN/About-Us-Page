import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.black, 0.05),
  // },
  marginLeft: 0,
  
  
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 12),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(0, 0, 1, 2),
    // t,r,b,l
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    
    [theme.breakpoints.up('sm')]: {
      width: '16ch',
      '&:focus': {
        width: '16ch',
      },
    },
    
  },
}));


function SearchAppBar() {
  return (
    <Box >
    <Box sx={{mr:0,color:'black',flexGrow: 1,display: { xs: 'none', md: 'flex' } }}>
        <Toolbar>         
         
          <Search >
            <SearchIconWrapper>
              <SearchIcon sx={{color:'blue'}}/>
            </SearchIconWrapper>
            <StyledInputBase sx={{fontSize:10}}
              placeholder={"Search Course"}
              // inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          {/* <IconButton
          
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            
          </IconButton> */}
        </Toolbar>
    </Box>
    </Box>
  );
}
export default SearchAppBar;
