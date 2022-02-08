import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import HomeContainer from './components/HomeContainer';

// Consistent theme for the website
const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <HomeContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
