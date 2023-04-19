import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Grid } from '@mui/material'
import { Card, CardActions, CardContent, Typography } from '@mui/material';


function Example() {
    const ind = [0, 1, 2, 3, 4];
    const studname = ['(28 Reviews)', '(18 Reviews)', '(16 Reviews)', '(14 Reviews)', '(28 Reviews)']
    const description = ['We are a Portsmouth based web design and e-marketing agency. We understand how important a website is to any business, big or small. Your online presence is now more important than ever before.']
    return (
        <Grid spacing={0} item key={0} xs={14} sm={6} md={4}>
            <Carousel
                NavButton={({ onClick, className, style, next, prev }) => {
                    // Other logic

                    return (
                        <Button onClick={onClick} className={className} style={{ width: 200, height: 360, backgroundColor: "white", opacity: 0 }}>
                            {next}
                            {prev}
                        </Button>
                    )
                }}
            >
                {/* Carousel button end and card item start */}
                {ind.map((i) => (
                    <Grid spacing={0} item key={0} xs={14} sm={6} md={4}  >

                        <Card spacing={0} item key={0} xs={14} sm={6} md={4} sx={{ bgcolor: 'red', borderRadius: 0, height: '80%', display: 'flex', flexDirection: 'column' }}>

                            <CardContent xs={14} sm={6} md={4} sx={{ bgcolor: 'black', flexGrow: 1, m: 2 }}>
                                <Typography gutterBottom align="left" variant="h5" component="h2" sx={{ bgcolor: 'red', p: 5 }}>

                                    <Paper sx={{ bgcolor: 'blue', p: 2 }}>
                                        <Typography>{studname[i]}</Typography>
                                        <Typography>{description[0]}</Typography>

                                    </Paper>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
                }
            </Carousel>
        </Grid>
    )
}

export default Example;