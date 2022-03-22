import { useState } from 'react';
import { Grid, Button, Modal, Box, Paper, Typography } from '@mui/material';
import SignUp from '../SignUp';
import '../../App.css';
import { Header, Footer } from '../common';
import { Link } from 'react-router-dom';
import Background from './images/background.jpg';


// Component to show the home page
const HomePage = () => {

    // Declare a new state variable for the modal 
    const [open, setOpen] = useState(false);

    // Function to handle modal open
    const handleOpen = () => {
        setOpen(true);
    };

    // Function to handle modal close
    const handleClose = () => {
        setOpen(false);
    };

    const divStyle = {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    };

    return (
        <div style={divStyle}>
        <Header />

        <Grid 
        container
        style = {{ marginTop:'5vh', marginBottom: '5vh' }}
        spacing = {8}
        justifyContent = "center"
        alignItems = "stretch"
        direction = "column"
        >
            <Grid item sx={{ marginTop:'20vh', marginBottom: '20vh'}}>
                
                <Typography variant="h4" style={{ color:'white', padding:5 }}>Little Forests</Typography>
                <Typography variant="h6" style={{ color:'white', padding:5 }}>Growing forests in your community, sign up to begin your own Little Forest!</Typography>
                <Button
                onClick={handleOpen}
                variant="contained" 
                color="primary"  
                style = {{ marginTop:30, color: "white" }}
                >Sign Up</Button>

                <Modal 
                open={open}
                onClose={handleClose}
                sx={{ alignItems: "center", justifyContent: "center" }}
                >
                    <Box sx={{
                        width: 400,
                        backgroundColor: 'white',
                        borderRadius: '25px',
                        marginLeft: '40vw'
                    }}>
                        <SignUp />
                    </Box>
                    
                </Modal>

            </Grid>
        </Grid>
            
        <Grid container 
        style = {{ paddingTop : "5vh", paddingBottom: "8vh", marginTop: "8vh", marginBottom: '8vh'}}
        justifyContent = "space-evenly"
        alignItems = "stretch"
        direction = "row"
        spacing = {4}
        >
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
                <Paper elevation={24} style={{height: '15vh', padding: '5vh' }}>
                    <Button component={Link} to='/browseforests' variant='contained' color="primary" style = {{ marginBottom:15, color: "white" }}>Browse Little Forests</Button>
                    <Typography variant='body1'>Take a look at some of the forests that our users have created!</Typography>
                </Paper>
            </Grid>
            <Grid item xs={5}>
                <Paper elevation={24} style={{height: '15vh', padding: '5vh'}}>
                    <Button component={Link} to='/browseplants' variant='contained' color="primary" style = {{ marginBottom:15, color: "white" }}>Browse Plants</Button>
                    <Typography variant='body1'>Need inspiration? Take a look at our plant list and see if anything catches your eye!</Typography>
                </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
            

        <Footer />
        </div>
        
    )
}

export { HomePage as default }