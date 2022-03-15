import React from 'react'
import ProgressStepper from '../ProgressStepper';
import AccountHeader from '../common/AccountHeader';
import { Grid, Container, Button } from '@mui/material';

function PlantListPage() {
  return (
    <div>
      <AccountHeader />
      <Grid
        container
        style = {{ marginTop: '10vh', marginBottom: '20vh' }}
        justifyContent ="center"
        alignItems = "stretch"
        direction = "row"
      >
        <Grid item xs={12}>
          <h2>Plant List</h2>
        </Grid>

        <Grid item xs={12}>
          <ProgressStepper />
        </Grid>
        
        <Grid>
          <Grid item xs={3} />

          <Grid item xs={8}>
            <br /><br />
            <Container maxWidth="lg" sx={{ backgroundColor: "#E1E1E1", width: 700, height: 800, borderRadius: 5 }}>
              
            </Container>

          </Grid>

        </Grid>

        <Grid item xs={12}> 
          <Button variant="contained" sx={{ borderRadius:8, padding:2, paddingRight:4, paddingLeft:4, marginTop:5, marginRight:10 }}>Save as CSV</Button>
          <Button variant="contained" sx={{ borderRadius:8, padding:2, paddingRight:4, paddingLeft:4, marginTop:5, marginLeft:10 }}>Save as PDF</Button>
        </Grid>
      </Grid>
      

    </div>
  )
}

export default PlantListPage;

