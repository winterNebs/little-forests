import * as React from 'react';
import { Box, Grid, Paper, Radio, Stack } from '@mui/material';
import { ContainerValues } from './Pages/BuilderPage';

const ConditionContainer = (props: ContainerValues) => {

    // Use State to track the selected radio buttons
    const [selectedValue, setSelectedValue] = React.useState('default')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <>
            <Paper elevation={12} style={{marginTop: '5vh'}}>
                <Grid container 
                justifyContent = "center"
                alignItems = "stretch"
                direction = "row"
                >
                    <Grid item xs={12}>
                        <h3>{props.title}</h3>
                    </Grid>
                    <Grid item xs={12}>
                        <h4>{props.description}</h4>
                    </Grid>   

                    {props.siteConditions.map( condition => (
                        <Grid item xs={3}>
                            <Stack spacing={-2}>
                                {typeof condition.imageURL !== 'undefined' ? 
                                    <>
                                        <img src={condition.imageURL} /> 
                                        <h4>{condition.subtitle}</h4>
                                    </>
                                    : <h4>{condition.subtitle}</h4>
                                } 
                                <Radio 
                                    checked={selectedValue === condition.subtitle as string}
                                    onChange={handleChange}
                                    value={condition.subtitle}
                                    name={props.title}
                                    sx={{zIndex: 1050}}
                                />
                            </Stack>
                        </Grid>
                        ))}

                </Grid>
            </Paper>
        </>
    )
}

export { ConditionContainer as default}