import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Drawer, CssBaseline, Toolbar, Typography, Button, List, Divider } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';


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
  
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
  
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));
  
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));
  
export default function ProfileContainerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" open={open} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography align="left" variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            LOGO
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

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

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
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
