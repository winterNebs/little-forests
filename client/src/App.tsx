import ReactDOM from 'react-dom'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors'
import { Header } from './components/common';
import { Footer } from './components/common';
import HomePage from './components/Pages/HomePage';

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
      <Header />
        <Routes>
          <Route path='/'>
            <HomePage />  
          </Route>
          <Route path='/browseforests'>
            <h1>Browse Forests</h1>
          </Route>
        </Routes>
      <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
