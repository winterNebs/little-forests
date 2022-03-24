import React from 'react'
import { Header, Footer } from '../common'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import ImagePlaceholder from './images/image-placeholder.png';

export default function AboutPage() {
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
                <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center', backgroundColor:'primary.main', width:'100%', height:200 }}>
                    <Typography variant="h3" color="white">About Us</Typography>
                </Box>
            </Grid>
            
            <Container sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <Paper elevation={8} style={{ marginTop:20, padding:25, width:'80%', height:350 }}>
                {[0, 1, 2, 3, 4].map((value) => (
                    <img key={value} src={ImagePlaceholder} alt="Image placeholder" style={{ padding:5, width: 150, height: 150 }} />
                ))}
                    <Typography align="left" variant="h6" sx={{ paddingTop:3, paddingLeft:5, paddingRight:5 }}>Our Mission</Typography>
                    <Typography align="left" variant="body1" sx={{ paddingTop:2, paddingLeft:5, paddingRight:5 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Paper>
            </Container>
        </Grid>
        <Footer />
    </div>
  )
}
