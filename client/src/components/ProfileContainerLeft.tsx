import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Drawer, CssBaseline, Toolbar, Typography, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';
import AccountHeader from './common/AccountHeader'; 


const drawerWidth = 250;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 0,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

export default function ProfileContainerLeft() {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <AccountHeader />

      <Drawer
        sx={{
          width: 0,
          m: 2,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box' },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
          <Box //placeholder for profile image later
            sx={{
              width: 200,
              height: 260,
              m: 3,
              backgroundColor: 'primary.dark',
              borderRadius: 3
            }}
          />
          <Box sx={{ width: 200, height: 260, m:3 }}>
            <Typography align="left" variant="body1">
              <b>First Name, Last Name </b>
              <br/><br/>
              <b>Bio:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. 
              <br/><br/>
            </Typography>
            <Button variant="contained">Edit Profile</Button>
          </Box>
      </Drawer>


      <Main>
        <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        >
          <Toolbar />
          <Typography align="left" variant="h4">My Little Forests</Typography>
          <br />
          <br />      
          <Box sx={{ width: 300, height: 400, p: 5, border: "1px dashed grey", borderRadius: 5 }}>
            <br /><br /><br /><br /><br />
            <AddCircleIcon sx={{ fontSize: 50, color: 'primary.main' }} /> <br />
            <Button component={Link} to='/builder'>Create New Project</Button>
          </Box>
        </Box>
      </Main>
      
      
    </Box>
  );
}
