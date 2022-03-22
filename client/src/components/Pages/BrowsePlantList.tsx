import React from 'react'
import ProgressStepper from '../ProgressStepper';
import { Header, Footer } from '../common';
import { Grid, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function BrowsePlantList() {
  return (
    <div>
      <Header />
      <Grid
        container
        style = {{ marginTop: '15vh', marginBottom: '20vh' }}
        justifyContent ="center"
        alignItems = "stretch"
        direction = "row"
      >
        <Container className="back-button"
            sx={{ 
                display:"flex", flexDirection:"column", justifyContent:"center"
            }}
        >
        <Button component={Link} to='/browse-forest-page' sx={{ justifySelf:"flexStart", width: '5px', borderRadius:5 }} variant="contained">Back</Button>
        </Container>

        <Grid item xs={12}>
          <h2>Plant List</h2>
        </Grid>
        
        <Grid>
          <Grid item xs={3} />

          <Grid item xs={8}>
            <Container maxWidth="lg" sx={{ backgroundColor: "#E1E1E1", width: 700, height: 800, borderRadius: 5 }}>
              
            </Container>

          </Grid>

        </Grid>

        <Grid item xs={12}> 
          <Button variant="contained" sx={{ borderRadius:8, padding:2, paddingRight:4, paddingLeft:4, marginTop:5, marginRight:10 }}>Save as CSV</Button>
          <Button variant="contained" sx={{ borderRadius:8, padding:2, paddingRight:4, paddingLeft:4, marginTop:5, marginLeft:10 }}>Save as PDF</Button>
        </Grid>
      </Grid>
      
      <Footer />
    </div>
  )
}

export default BrowsePlantList;