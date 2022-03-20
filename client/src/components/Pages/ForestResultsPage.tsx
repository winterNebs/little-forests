import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ProgressStepper from '../ProgressStepper';
import AccountHeader from '../common/AccountHeader';
import ImagePlaceholder from './images/image-placeholder.png';
import './ForestResultsPage.css';

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

export default function ForestResultsList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  
  return (
    <div>
      <AccountHeader />    
      <br /><br /><br /><br /><br />
      <h2>Forest Type</h2>
      <ProgressStepper />
      <br />
      <div className="top-half">
        <img src={ImagePlaceholder} alt="Image placeholder" style={{ padding: 40, width: 500, height: 350 }} />
        <div className="text">
          <br /><br />
          <h3>Forest Type Name</h3>
          <p>This is a description of the forest type, the distinguishing characteristics and various properties of this forest type...
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
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
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </div>
      </div>

    </div>
  );
}