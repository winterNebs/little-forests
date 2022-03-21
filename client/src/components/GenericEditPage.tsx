import * as React from 'react';
import AccountHeader from '../components/common/AccountHeader';
import { Grid, Button, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import ImagePlaceholder from './Pages/images/image-placeholder.png';
import { Link } from 'react-router-dom';

function generate(element: React.ReactElement) {
    return [0, 1, 2, 3].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));


function GenericEditPage() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div>
        <AccountHeader />
        <Grid
            container
            style = {{ marginTop: '10vh', marginBottom: '20vh' }}
            justifyContent ="center"
            alignItems = "stretch"
            direction = "row"
        >
            <Grid item xs={12}>
                <h2>Edit Page</h2>
            </Grid>
            
            <div className="top-half">
                <img src={ImagePlaceholder} alt="Image placeholder" style={{ padding: 40, width: 500, height: 350 }} />
                <div className="text">
                    <br /><br />
                    <Typography variant="h6" sx={{ border:1, padding:2, marginBottom:3 }}>Forest/Plant Name</Typography>
                    <Typography variant="body1" sx={{ border:1, padding:2, paddingBottom:8 }}>This is a description of the forest/plant type, the distinguishing characteristics and various properties of this forest/plant type...
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </div>

                <div className="characteristic-list">
                    <Demo>
                        <List dense={dense}>
                            {generate(
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Characteristics"
                                        secondary={secondary ? 'Secondary text' : null}
                                        sx = {{ border:1, padding:1 }}
                                    />
                                </ListItem>,
                            )}
                        </List>
                    </Demo>
                </div>
            </div>
            <Grid item xs={12}>
                <Button component={Link} to='/dashboard/admin' variant="outlined" size="medium">Save</Button>
            </Grid>
        </Grid>
    </div>
  )
}

export default GenericEditPage;
