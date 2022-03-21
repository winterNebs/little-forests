import React from 'react';
import { Grid, Stack, IconButton, TextField } from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import placeholderImage from '../placeholder.jpg';

interface props {
    commonPlantName: string
    sciPlantName: string
    plantUse: string
}

export default function PlantItem(props: props) {

    // Create our hooks for
    const [count, setCount] = React.useState(0);
    
    // Functions to handle increment and decrement
    const handleIncrement = () => { setCount(count + 1) };
    const handleDecrement = () => { setCount(count - 1) };


    return (
        <>
            <Grid container>
            <Grid item xs={1.2}>
                <img className="small-image" src={placeholderImage} />
            </Grid>
            <Grid item xs={5.75}>
                <h3>{props.commonPlantName} ({props.sciPlantName})</h3>
            </Grid>
                <Grid item xs={3}>
                    
                    {props.plantUse === "quantitySelect" ? (
                        <Stack className="selector" >
                        <IconButton onClick={handleIncrement}>
                            <KeyboardArrowUp className="arrow-pad"/>
                        </IconButton>
                        <TextField value={count} />
                        {count == 0 ? (
                            <IconButton disabled>
                                <KeyboardArrowDown className="arrow-pad" />
                            </IconButton>   
                        ) : (
                            <IconButton onClick={handleDecrement}>
                                <KeyboardArrowDown className="arrow-pad" />
                            </IconButton>             
                        )
                        
                        }
                        
                        </Stack>
                    ) : (
                            <h1>temp</h1>
                        )
                    }

                    
                        
                    
                </Grid>
            </Grid>
        </>
    )

   
}

