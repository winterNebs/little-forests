import ReactDOM from 'react-dom'
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { green } from '@mui/material/colors'
import { Header } from './components/common';
import { Footer } from './components/common';
import HomePage from './components/Pages/HomePage';
import AccountDashboard from './components/Pages/AccountDashboard';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

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
          
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<AccountDashboard />} />
            </Routes>
            <Footer />
          </Router>
        
        </div>
      </ThemeProvider>
  );
}

export default App;
