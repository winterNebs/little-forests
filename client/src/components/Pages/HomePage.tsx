import { useState } from 'react';
import { Grid, Button, Modal, Box } from '@mui/material';
import SecondaryItem from '../SecondaryItem';
import SignUp from '../SignUp';
import '../../App.css';
import { style } from '@mui/system';

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
        <>

        <Grid 
        container
        style = {{ paddingTop : 100 }}
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
            >
                <Box sx={{
                    width: 400,
                    backgroundColor: 'white',
                    borderRadius: '25px'
                }}>
                    <SignUp />
                </Box>
                
            </Modal>

            </Grid>
        </Grid>
            
        <Grid container 
        style = {{ paddingTop : 100 }}
        justifyContent = "space-evenly"
        alignItems = "center"
        direction = "row"
        >
            <Grid item xs>
                <SecondaryItem buttonText='Browse Forests' paraText='Take a look at other projects that our users have created!' />
            </Grid>
            <Grid item xs>
                <SecondaryItem buttonText='Browse Plants' paraText='Need inspiration? Take a look at our plant list and see if anything catches your eye!' />
            </Grid>
        </Grid>
            

        
        
        </>
        
    )
}

export { HomePage as default }