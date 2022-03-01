import { Grid } from "@mui/material";
import ProgressStepper from '../ProgressStepper';
import '@fontsource/roboto'

// Create our steps
const steps = ['Input', 'Results', 'Plan', 'Plant']

// Interface for site conditions 
export interface SiteConditionValues{
    subtitle: string, 
    imageURL?: string
}

// Create a list version of Site Condition Values
interface SiteConditionList extends Array<SiteConditionValues>{}

// Slope Site Condition List
const slopeConditions: SiteConditionValues[] = [
    {subtitle: 'None'}, {subtitle: 'Gentle'}, {subtitle: 'Moderate'}, {subtitle: 'Steep'}
]

// Values for the Slope Site Condition and Container
const slopeValues = {

}

const BuilderPage = () => {


    return (
        <>
            <Grid 
            container
            style = {{ marginTop: '10vh', marginBottom: '20vh'}}
            justifyContent = "center"
            alignItems = "stretch"
            direction = "row"
            >
                <Grid item xs={12}>
                    <h2>Input Site Conditions</h2>
                </Grid>
                
                <Grid item xs={12}>
                    <ProgressStepper />
                </Grid> 
                <Grid item xs={3} />
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={3} />
            </Grid>
        </>
        
    );
}

export { BuilderPage as default }