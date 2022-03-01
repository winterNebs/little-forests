import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import ProgressStepper from '../ProgressStepper';
import { useNavigate } from "react-router-dom";

function ForestResultsList() {
    const [spacing, setSpacing] = React.useState(2);
    let navigate = useNavigate();

  return (
    <div>
    <br /><br /><br /><br /><br /><br /><br />
    <h2>Forest Results List</h2>
    <ProgressStepper />
    <br /><br />
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={5}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Box onClick={() => {navigate("/results-page");}}
                sx={{
                  borderRadius: 5,
                  height: 340,
                  width: 300,
                  backgroundColor: 'primary.dark',
                  '&:hover': {
                      backgroundColor: 'primary.main',
                      opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <Box>
                  <Typography paragraph>Forest Type</Typography>
                </Box>
              </Box>
              
            </Grid>
          ))}
        </Grid>
      </Grid>
      
    </Grid>
    </div>
  )
}

export default ForestResultsList