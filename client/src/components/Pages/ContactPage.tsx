import React from 'react'
import { Header, Footer } from '../common'
import { Grid, Box, Typography, Paper, Container } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactPage() {
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
                    <Typography variant="h3" color="white">Contact Us</Typography>
                </Box>
            </Grid>

            <Container sx={{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
                <Paper elevation={8} style={{ margin:50, padding:25, width:'40%', height:300 }}>
                    <CallIcon color='primary' fontSize='large'/>
                    <Typography align="center" variant="body1" sx={{ paddingTop:3, paddingLeft:5, paddingRight:5 }}>Call Us</Typography>
                    <Typography align="center" variant="body2" sx={{ paddingTop:2, paddingLeft:5, paddingRight:5 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    <Typography align="center" variant="body2" sx={{ color:'primary.dark', paddingTop:3, paddingLeft:5, paddingRight:5 }}>(999-999-9999)</Typography>
                </Paper>

                <Paper elevation={8} style={{ margin:50, padding:25, width:'40%', height:300 }}>
                    <EmailIcon color='primary' fontSize='large'/>
                    <Typography align="center" variant="body1" sx={{ paddingTop:3, paddingLeft:5, paddingRight:5 }}>Email Us</Typography>
                    <Typography align="center" variant="body2" sx={{ paddingTop:2, paddingLeft:5, paddingRight:5 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    <Typography align="center" variant="body2" sx={{ color:'primary.dark', paddingTop:3, paddingLeft:5, paddingRight:5 }}>contact@littleforest.com</Typography>
                </Paper>
            </Container>
        </Grid>
        <Footer />
    </div>
  )
}

