import * as React from 'react';
import { Box, Stepper, Step, StepLabel, Button, Grid, Fab } from '@mui/material';
import { ArrowBack, ArrowForward } from "@mui/icons-material"
import Typography from '@mui/material/Typography';

const steps = ['Input', 'Results', 'Plan', 'Plant'];

const ProgressStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = () => {
    //placeholder
  };
  

  return (
    <Grid>
        <Grid container 
        justifyContent = "center"
        alignItems = "stretch"
        >
            <Grid item xs={2}>
                { activeStep === 0 ? (
                    <>
                        <Fab variant="extended" color="primary" onClick={(handleBack)} disabled >
                            <ArrowBack />   
                            Back
                        </Fab>
                    </>

                ) : (
                    <>
                        <Fab variant="extended" color="primary" onClick={(handleBack)} >
                            <ArrowBack />   
                            Back
                        </Fab>
                    </>
                    )
                
                }
                
            </Grid>
            <Grid item xs={4}>

            
                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: {
                            optional?: React.ReactNode;
                        } = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                        })}
                    </Stepper>
                    
                </Box>
            </Grid>
            
            <Grid item xs={2}>
                { activeStep === steps.length - 1 ? (
                        <>
                            <Fab variant="extended" color="primary" onClick={(handleFinish)} >
                                Finish
                                <ArrowForward />   
                            </Fab>
                        </>

                    ) : (
                        <>
                            <Fab variant="extended" color="primary" onClick={(handleNext)} >
                                Next                                
                                <ArrowForward />
                            </Fab>
                        </>
                        )
                    
                }
            </Grid>
        </Grid>
    </Grid>
    
  );
}

export {ProgressStepper as default};