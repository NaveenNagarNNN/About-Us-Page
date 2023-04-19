import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Carousel from 'react-material-ui-carousel';

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

const cards = [0, 1, 2, 3, 4,];
const Headingtext = [' (26 Reviews) ', ' (16 Reviews) ', ' (14 Reviews) ', ' (36 Reviews) ', ' (17 Reviews) ', ' (05 Reviews) ', ' (117 Reviews) ']


const theme = createTheme();

function StudentFeedback() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <main color='white'>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#f2f4f9',
            pt: 12,
            pb: 1,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h6" fontWeight={600} fontSize={15}
              align="center"
              color="#d2093c"
              gutterBottom
            >
              Student Satisfaction
            </Typography>
            <Typography variant="h4" fontFamily={'sans-serif'} align="center" lineHeight={1.5} fontWeight={800} color="#0f1216" paragraph>
              Student Community Feedback
            </Typography>
          </Container>
        </Box>

        <Container sx={{ py: 8, display: { xs: 'none', md: 'flex' }, bgcolor: '#f2f4f9' }} maxWidth="full">
          {/* End hero unit */}
          <Carousel sx={{ width: '100%' }}>
            {/* <Grid sx={{}} container spacing={4} > */}
            {/* <Card sx={{display:'flex',flexDirection: 'row'}}> */}
            {cards.map((card) => (

              <Container sx={{ display: 'flex' }}>
                <Card
                  sx={{ width: '100%', borderRadius: 4, m: 2, pt: 10, }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom align="left" variant="h5" component="h2">
                      {Headingtext[card]}
                    </Typography>
                    <Typography>
                      We are a Portsmouth based web design and e-marketing agency. We understand how important a website is to any business, big or small. Your online presence is now more important than ever before.
                    </Typography>
                    <CardActions>
                      <Button endIcon={<ArrowForwardIcon />} sx={{ fontSize: 12, textTransform: 'capitalize' }} href="#text-buttons">Learn more</Button>
                    </CardActions>
                  </CardContent>

                </Card>
                <Card
                  sx={{ width: '100%', borderRadius: 4, m: 2, pt: 10, }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom align="left" variant="h5" component="h2">
                      {Headingtext[card + 1]}
                    </Typography>
                    <Typography>
                      We are a Portsmouth based web design and e-marketing agency. We understand how important a website is to any business, big or small. Your online presence is now more important than ever before.
                    </Typography>
                    <CardActions>
                      <Button endIcon={<ArrowForwardIcon />} sx={{ fontSize: 12, textTransform: 'capitalize' }} href="#text-buttons">Learn more</Button>
                    </CardActions>
                  </CardContent>

                </Card>
                <Card
                  sx={{ width: '100%', borderRadius: 4, m: 2, pt: 10, }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom align="left" variant="h5" component="h2">
                      {Headingtext[card + 2]}
                    </Typography>
                    <Typography>
                      We are a Portsmouth based web design and e-marketing agency. We understand how important a website is to any business, big or small. Your online presence is now more important than ever before.
                    </Typography>
                    <CardActions>
                      <Button endIcon={<ArrowForwardIcon />} sx={{ fontSize: 12, textTransform: 'capitalize' }} href="#text-buttons">Learn more</Button>
                    </CardActions>
                  </CardContent>

                </Card>
              </Container>
            ))}
            {/* </Card> */}
            {/* </Grid> */}
          </Carousel>
        </Container>
        <Container sx={{ py: 8, display: { xs: 'flex', md: 'none' }, bgcolor: '#f2f4f9' }} maxWidth="full">
          {/* End hero unit */}
          <Carousel sx={{ width: '100%' }}>
            {/* <Grid sx={{}} container spacing={4} > */}
            {/* <Card sx={{display:'flex',flexDirection: 'row'}}> */}
            {cards.map((card) => (

              <Container sx={{ display: 'flex' }}>
                <Card
                  sx={{ width: '100%', borderRadius: 4, m: 2, pt: 10, }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom align="left" variant="h5" component="h2">
                      {Headingtext[card]}
                    </Typography>
                    <Typography>
                      We are a Portsmouth based web design and e-marketing agency. We understand how important a website is to any business, big or small. Your online presence is now more important than ever before.
                    </Typography>
                    <CardActions>
                      <Button endIcon={<ArrowForwardIcon />} sx={{ fontSize: 12, textTransform: 'capitalize' }} href="#text-buttons">Learn more</Button>
                    </CardActions>
                  </CardContent>

                </Card>
                {/* <Card
                  sx={{ width: '100%', borderRadius: 4, m: 2, pt: 10, }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom align="left" variant="h5" component="h2">
                      {Headingtext[card + 1]}
                    </Typography>
                    <Typography>
                      We are a Portsmouth based web design and e-marketing agency. We understand how important a website is to any business, big or small. Your online presence is now more important than ever before.
                    </Typography>
                    <CardActions>
                      <Button endIcon={<ArrowForwardIcon />} sx={{ fontSize: 12, textTransform: 'capitalize' }} href="#text-buttons">Learn more</Button>
                    </CardActions>
                  </CardContent>

                </Card>
                <Card
                  sx={{ width: '100%', borderRadius: 4, m: 2, pt: 10, }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom align="left" variant="h5" component="h2">
                      {Headingtext[card + 2]}
                    </Typography>
                    <Typography>
                      We are a Portsmouth based web design and e-marketing agency. We understand how important a website is to any business, big or small. Your online presence is now more important than ever before.
                    </Typography>
                    <CardActions>
                      <Button endIcon={<ArrowForwardIcon />} sx={{ fontSize: 12, textTransform: 'capitalize' }} href="#text-buttons">Learn more</Button>
                    </CardActions>
                  </CardContent>

                </Card> */}
              </Container>
            ))}
            {/* </Card> */}
            {/* </Grid> */}
          </Carousel>
        </Container>

      </main>

    </ThemeProvider>
  );
}
export default StudentFeedback;

{/* <Grid spacing={2} item key={card} xs={14} sm={6} md={4}  > */ }
{/* </Grid> */ }