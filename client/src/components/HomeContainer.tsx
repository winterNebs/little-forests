import { Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'
import SecondaryItem from './SecondaryItem'

// Component to show the home page
const HomeContainer = () => {
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
            variant="contained" 
            color="primary"  
            style = {{ color: "white" }}
            >Sign Up</Button>
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

export { HomeContainer as default }