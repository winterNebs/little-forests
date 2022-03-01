import * as React from 'react';
import { Box, Grid, Paper, Radio, Stack } from '@mui/material';
import { SiteConditionValues as ConditionValues} from './Pages/BuilderPage';
import SiteCondition from './SiteCondition';

// Create our prop interface
interface ContainerProps{
    containerTitle: string,
    containerDescription: string, 
    conditionList: ConditionValues[],
}

const ConditionContainer = (props: ContainerProps) => {

    // Use State to track the selected radio buttons
    const [selectedValue, setSelectedValue] = React.useState('default')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <>
            <Paper elevation={24}>
                <Grid container 
                justifyContent = "center"
                alignItems = "stretch"
                direction = "row"
                >
                    <Grid item xs={12}>
                        <h3>{props.containerTitle}</h3>
                    </Grid>
                    <Grid item xs={12}>
                        <h4>{props.containerDescription}</h4>
                    </Grid>   

                    {props.conditionList.map( condition => (
                        <Grid item xs={3}>
                            <Stack>
                                if(typeof condition.imageURL !== 'undefined'){
                                    <SiteCondition imageURL={condition.imageURL} subtitle={condition.subtitle} />
                                }
                                else{
                                    <SiteCondition subtitle={condition.subtitle} />
                                }
                                <Radio 
                                    checked={selectedValue == {condition.subtitle}}
                                    onChange={handleChange}
                                    value={condition.subtitle}
                                    name={props.containerTitle}
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