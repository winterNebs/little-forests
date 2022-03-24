import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Typography, Grid } from '@mui/material';
import { Footer, Header } from '../common';
import { Link } from 'react-router-dom';

export default function BrowsePlants() {
  return (
    <div>
        <Header />
        <Grid 
            container
            style = {{ marginTop: '15vh', marginBottom: '15vh'}}
            justifyContent = "center"
            alignItems = "stretch"
            direction = "column"
        >
            <Grid item>
                <h2>Browse Plants</h2>
            </Grid>

            <Grid 
                container
                style={{ }}
                justifyContent = "center"
                alignItems = "stretch"
                direction = "row"
            >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
                    <Grid key={value} item>
                        <Card sx={{ width: 250, maxWidth: 300, backgroundColor: '#e1e1e1', borderRadius:5, padding:3, margin:2 }}>
                            <CardMedia
                                component="img"
                                alt="Placeholder Image"/*prop later?*/
                                height="250"
                                src="./Pages/images/image-placeholder.png"/*prop later?*/
                                sx={{ border:1, borderColor:"white", borderRadius:3 }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign:"left" }}>
                                    Plant Name
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ textAlign:"left" }}>
                                    Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                            </CardContent>
                            
                        </Card>
                        
                    </Grid>
                ))}
            </Grid>
        </Grid>
        <Footer />
    </div>
  )
}
