import { useState } from 'react';
import { Grid, Button, Modal, Box, Paper } from '@mui/material';
import SecondaryItem from '../SecondaryItem';
import SignUp from '../SignUp';
import '../../App.css';
import { Header, Footer } from '../common';


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

    return (
        <div>
        <Header />

        <Grid 
        container
        style = {{ marginTop: '20vh', marginBottom: '20vh'}}
        spacing = {10}
        justifyContent = "center"
        alignItems = "stretch"
        direction = "column"
        >
            <Grid item>
                
                <h3>Little Forests</h3>
                <p>Growing forests in your community, sign up to begin your own Little Forest!</p>
                <Button
                onClick={handleOpen}
                variant="contained" 
                color="primary"  
                style = {{ color: "white" }}
                >Sign Up</Button>

                <Modal 
                open={open}
                onClose={handleClose}
                sx={{ alignItems: "center", justifyContent: "center"}}
                >
                    <Box sx={{
                        width: 400,
                        backgroundColor: 'white',
                        borderRadius: '25px',
                        marginLeft: '40vw'
                    }}>
                        <SignUp setState={setOpen} modalState={open} />
                    </Box>
                    
                </Modal>

            </Grid>
        </Grid>
            
        <Grid container 
        style = {{ paddingTop : "8vh", paddingBottom: "5vh", marginTop: "8vh", marginBottom: '8vh'}}
        justifyContent = "space-evenly"
        alignItems = "stretch"
        direction = "row"
        spacing = {4}
        >
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
                <Paper elevation={24} style={{height: '20vh', paddingTop: '8vh' }}>
                    <SecondaryItem buttonText='Browse Forests' paraText='Take a look at some of the forests that our users have created!' />
                </Paper>
            </Grid>
            <Grid item xs={5}>
                <Paper elevation={24} style={{height: '20vh', paddingTop: '8vh'}}>
                    <SecondaryItem buttonText='Browse Plants' paraText='Need inspiration? Take a look at our plant list and see if anything catches your eye!' />
                </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
        </Grid>
            

        <Footer />
        </div>
        
    )
}

export { HomePage as default }