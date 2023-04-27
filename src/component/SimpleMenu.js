import React, { useState } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { createMuiTheme, ThemeProvider } from '@mui/material/styles';
import Tryhome from './navMenu/Tryhome';
import { Link } from 'react-router-dom';
import zIndex from '@mui/material/styles/zIndex';
import Envatomarket from './navMenu/Envatomarket';
import Logotry from '../Logotry';
import { AppBar, Box, Container, Stack, Toolbar } from '@mui/material';
import SearchAppBar from './Searchbar';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const theme = createMuiTheme({});

const inside = [['English Book', 'Math Book', 'Story Book'],
['Home One', 'Home Two', 'Home Three'],
['About', 'Instructor', 'Profile', 'Login', 'Signup', 'Events'],
['Course', 'Right Sidebar', 'Course List', 'Course Single'],
['Blog', 'Blog Single']]
const menulist = ['Categories', 'Home', 'Pages', 'Courses', 'Blog'];
const ind = [0, 1, 2, 3, 4]

const SimpleMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0)

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
        setIndex(event.target.id)
        // console.log(x)
    };

    const handleClose = (e) => {
        if (e.currentTarget.localName !== "ul") {
            const menu = document.getElementById("simple-menu").children[2];
            const menuBoundary = {
                left: menu.offsetLeft,
                top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
                right: menu.offsetLeft + menu.offsetWidth,
                bottom: menu.offsetTop + menu.offsetHeight
            };
            if (
                e.clientX >= menuBoundary.left &&
                e.clientX <= menuBoundary.right &&
                e.clientY <= menuBoundary.bottom &&
                e.clientY >= menuBoundary.top
            ) {
                return;
            }
        }

        setOpen(false);
        setIndex(e.target.id)
    };

    theme.props = {
        MuiList: {
            onMouseLeave: (e) => {
                handleClose(e);
            },

        }
    };
    //   return (
    //     <div>
    //       <ThemeProvider theme={theme}>
    //       {ind.map((card)=>(
    // <Button>
    //         <Button
    //           id={card}

    //           aria-owns={open ? "simple-menu" : null}
    //           aria-haspopup="true"
    //           onMouseOver={handleOpen}
    //           onMouseLeave={handleClose}
    //           sx={{ zIndex: 1301 }}
    //         >
    //           {menulist[card]}
    //           {/* {console.log(card)} */}

    //         </Button>
    //         <Menu
    //           id="simple-menu"
    //           anchorEl={anchorEl}
    //           open={open}
    //           anchorOrigin={{
    //             vertical: "bottom",
    //             horizontal: "center"
    //           }}
    //           transformOrigin={{
    //             vertical: "top",
    //             horizontal: "center"
    //           }}

    //         >

    //         {inside[card].map((insd)=>(
    //             <MenuItem sx={{fontSize:11}} disableRipple>
    //           {/* <EditIcon /> */}
    //           {insd}
    //         </MenuItem>
    //         ))}


    //         </Menu>



    //         </Button>

    //       ))}

    //       {/* <Menu
    //           id="simple-menu"
    //           anchorEl={anchorEl}
    //           open={open}
    //           anchorOrigin={{
    //             vertical: "bottom",
    //             horizontal: "center"
    //           }}
    //           transformOrigin={{
    //             vertical: "top",
    //             horizontal: "center"
    //           }}
    //         >
    //           Menu
    //           <br />
    //           Items
    //         </Menu> */}

    //       </ThemeProvider>
    //     </div>
    //   );
    // };

    return (
        <div>
        {/* <Envatomarket />             */}
            <Box sx={{mt:6.3,width:'100%',maxWidth:'100%',position:'fixed',zIndex:10000}}>
            
            <ThemeProvider theme={theme} >
            
                {/* <AppBar> */}
                
                <Container disableGutters sx={{bgcolor:'white'}} >
                    <Container disableGutters sx={{height:70, pl:1,alignItems: 'center', display: 'flex', cursor: 'pointer' }}>
                        <Logotry  />
                        <Container sx={{ display:'block',pr:0,  justifyContent: 'right', ml: 0, flexGrow: 1, textAlign: 'center', display: { xs: 'none', md: 'flex' }, }}>
                            {ind.map((card) => (
                                <>
                                    <Button
                                        id={card}
                                        aria-owns={open ? "simple-menu" : null}
                                        aria-haspopup="true"
                                        onMouseOver={handleOpen}
                                        onMouseLeave={handleClose}
                                        sx={{ fontWeight: 700, color: '#00306e', mr: 0, pr: 0, justifyContent: 'right', textTransform: 'capitalize', fontSize: 11, zIndex: 1301 }}
                                    // endIcon={<KeyboardArrowDownIcon/>}
                                    >
                                        {menulist[card]}
                                    </Button>
                                    <Stack  sx={{ color: '#00306e', justifyContent: 'center' }}><KeyboardArrowDownIcon /></Stack>

                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        sx={{ boxShadow: 'none' }}
                                        anchorOrigin={{
                                            vertical: "bottom",
                                            horizontal: "left",

                                        }}
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "left",

                                        }}
                                    >
                                        {inside[index].map((insd) => (
                                            <MenuItem sx={{ fontSize: 11, }} disableRipple>
                                                {/* <EditIcon /> */}
                                                {insd}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </>
                            ))}

                            <Button

                                sx={{  mr: 2, fontWeight: 700, color: '#00306e', pr: 0, justifyContent: 'right', textTransform: 'capitalize', fontSize: 11, zIndex: 1301 }}
                            // endIcon={<KeyboardArrowDownIcon/>}
                            >
                                Contact
                            </Button>
                            {/* Seach bar */}
                            <Paper
                            component="form"
                            sx={{ mr:0, p: '0px 6px', display: 'flex', alignItems: 'center', width: 200,height:35,bgcolor:'#f2f4f9' }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1,fontSize:12 }}
                                placeholder="Search Courses"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <IconButton type="button" sx={{height:'5vh',width:'5vh'}} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                        </Container>
                        
                        

                    </Container>


                </Container>

                {/* </AppBar> */}

            </ThemeProvider>
            </Box>

        </div>
    );
};



export default SimpleMenu;