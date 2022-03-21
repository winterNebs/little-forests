import * as React from 'react';
import { Grid, Button, Stack, Divider } from '@mui/material';
import { ForestContainerValues } from './Pages/BuilderPage';
import placeholderImage from '../placeholder.jpg';
import { Link } from 'react-router-dom';

const ForestTypeContainer = (props: ForestContainerValues) => {

    // Store title in case we need to return forest type
    const title = props.title;

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
                >s
                    <Grid item>
                        <Button component={Link} to='/results-page' variant="contained">More Info</Button>
                    </Grid>
                    <Grid item>
                        { props.setForestValue ? (
                            <Button variant="contained" onClick={props.setForestValue()} value={title}>Select</Button>
                        ) : (
                            <Button variant="contained" disabled>Select</Button>
                            )
                        
                    }
                        
                    </Grid>
                </Grid>
                <Divider light />
            </Stack>
        </>
    )
}

export { ForestTypeContainer as default}