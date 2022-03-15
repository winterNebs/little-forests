import * as React from 'react';
import { Grid, Button, Stack, Divider } from '@mui/material';
import { ForestContainerValues } from './Pages/BuilderPage';
import placeholderImage from '../placeholder.jpg';

const ForestTypeContainer = (props: ForestContainerValues) => {

    return (
        <>
            <Stack 
            justifyContent="center" 
            alignItems="center"
            spacing={2}>
                {typeof props.imageURL !== 'undefined' ? 
                    <>
                        <img className="forest-thumbnail" src={props.imageURL} /> 
                        
                    </>
                    : 
                    <>
                        <img className="forest-thumbnail" src={placeholderImage}/> 
                    </>
                    
                } 
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <Grid 
                container 
                spacing={2}
                justifyContent="center"
                alignItems="center"
                >
                    <Grid item>
                        <Button variant="contained">More Info</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained">Select</Button>
                    </Grid>
                </Grid>
                <Divider light />
            </Stack>
        </>
    )
}

export { ForestTypeContainer as default}