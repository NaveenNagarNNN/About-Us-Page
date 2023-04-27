import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import EastIcon from '@mui/icons-material/East';
// import pic from '../src/pic.png'
import { Button, Container, ImageList, ImageListItem, Link, Typography } from '@mui/material';
import Logotry from '../Logotry';
import ImageListPic from './ImageListPic';
import Chatimg from './Chatimg'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Imagelist() {
    return (
        <Box sx={{p:6, mt:6, flexGrow: 1 }}>
            <Grid container spacing={10}>
                <Grid xs={10} md={6}>
                    <ImageListPic></ImageListPic>
                    {/* <Item>
                        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                            
                                <ImageListItem key={item.img}>
                                    <img
                                        src={pic}
                                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        // alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                          
                        </ImageList>
                    </Item> */}
                </Grid>
                <Grid sx={{ pt: 10, }} xs={10} md={6}>
                    <Typography variant='h4' sx={{ color: '#00306e', fontWeight: 750, lineHeight: '40px ' }} >
                        Welcome to
                    </Typography>
                    <Typography variant='h4' sx={{ color: 'red', fontWeight: 750, }}>Echooling LMS<br /> Platform</Typography>
                    <Typography sx={{color:'#777',fontSize:15,fontFamily:'sans-serif' }}>
                        <br/>
                        Education is both the act of teaching knowledge to others and<br/>
                        the act of receiving knowledge from someone else.
                        
                        <br/>
                        <h5>Have questions? <Link sx={{color:'red'}}>Get Free Guide</Link></h5>
                        <br/>                        
                        <hr/>
                        
                        <br/>
                        Education also refers to the knowledge received through schooling instruction<br/>
                        and to the institution of teaching as a whole. The main purpose of education<br/>
                        is the integral development of a person.
                    </Typography>
                    <br/>
                    <Container disableGutters sx={{mb:6,display:'flex'}}>
                    <Button variant="outlined" 
                    endIcon={<EastIcon/>}
                    sx={{textTransform:'capitalize',mr:4,":hover":{bgcolor:'red',color:'white'}}}>Read More</Button>
                    <Chatimg sx={{}}/>
                    <Typography sx={{ml:2,mt:1,fontSize:10}} >Get Support<br/>
                    <Link underline='none' sx={{fontWeight:700}}>support@react.com</Link>
                    </Typography>
                    </Container>
                </Grid>


            </Grid>
        </Box>
    );
}
