import { Grid, Box, Stack } from '@mui/material';
import SelectorBox from '../SelectorBox';
import AccountHeader from '../common/AccountHeader';

// Build our component 
export default function PlanPage() {


    // API FUNCTIONALITY NEEDED ---> LOAD IN DATABASE INFORMATION FOR PLANTS SO THEY CAN BE ADDED TO THE LIST

    // Question for planning - do we have a minimum required number? What restrictions are there on the selections? 

    // We need to track the list of selected plants for each category and their related quantity
    const treeList = [];
    const shrubList = [];
    const canopyList = [];
    const understory = [];

    // We need to values to handle

    

    return (
        <>
            <AccountHeader />
            <Grid container className="screen-padded">
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <Stack spacing={3}>
                        <SelectorBox title="Trees" />
                        <SelectorBox title="Shrub" />
                        <SelectorBox title="Canopy" />
                        <SelectorBox title="Understory" />
                    </Stack>
                </Grid>             
            </Grid>
        </>
            
            )
};