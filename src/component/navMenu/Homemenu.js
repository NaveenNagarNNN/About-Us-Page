import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
      cursor:'pointer'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
      cursor:'pointer'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 0,
    marginTop: theme.spacing(2.6),
    minWidth: 120,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    // boxShadow:
    //   'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          // theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div  >
      <Button 
            
        onClick={handleClick}
        sx={{fontSize:11,fontWeight:700,color: '#00306e',cursor:'pointer',textTransform: 'capitalize',}}
        // onPointerLeave={handleClose}
        endIcon={<KeyboardArrowDownIcon />}
       
      >
        Home
      </Button>
      <StyledMenu sx={{cursor:'pointer'}}
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem sx={{fontSize:11}} disableRipple>
          {/* <EditIcon /> */}
          Home One
        </MenuItem>
        <MenuItem sx={{fontSize:11}} disableRipple>
          {/* <FileCopyIcon /> */}
          Home Two
        </MenuItem>
        {/* <Divider sx={{ my: 0.5 }} /> */}
        <MenuItem sx={{fontSize:11}} disableRipple>
          {/* <ArchiveIcon /> */}
          Home Three
        </MenuItem>
        
      </StyledMenu>
    </div>
  );
}
export default  CustomizedMenus;