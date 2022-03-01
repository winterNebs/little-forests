import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';

const drawerWidth = 240;

export default function ProfileContainerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Account Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
            <Box //placeholder for profile image later
                sx={{
                    width: 239,
                    height: 300,
                    backgroundColor: 'primary.dark'
                }}
            />
        
            <Typography align="left" variant="body1">
                <b>First Name, Last Name </b>
                <br/>
                <b>Bio:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. 
            </Typography>
            <Button variant="contained">Edit Profile</Button>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <br />
        <br />
        <Typography align="left" variant="h4">My Little Forests</Typography>
        <br />
        <br />      
        <Box sx={{ width: 300, height: 400, p: 5, border: "1px dashed grey" }}>
          
          <Button>Create New Project</Button>
        </Box>

      </Box>
    </Box>
  );
}
