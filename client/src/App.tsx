import ReactDOM from 'react-dom'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors'
import { Header } from './components/common';
import { Footer } from './components/common';
import HomePage from './components/Pages/HomePage';
import SelectPage from './components/Pages/SelectPage';
import AccountDashboard from './components/Pages/AccountDashboard';
import AdminDashboard from './components/Pages/AdminDashboard';
import ForestResultsPage from './components/Pages/ForestResultsPage';
import ForestResultsList from './components/Pages/ForestResultsList';
import PlantListPage from './components/Pages/PlantListPage';
import PlanPage from './components/Pages/PlanPage';
import EditPlants from './components/EditPlants';
import EditForests from './components/EditForests';
import GenericEditList from './components/GenericEditList';
import GenericEditPage from './components/GenericEditPage';
import BrowseForests from './components/Pages/BrowseForests';
import BrowsePlants from './components/Pages/BrowsePlants';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';
import BrowseForestPage from './components/Pages/BrowseForestPage';
import BrowsePlantList from './components/Pages/BrowsePlantList';



// Consistent theme for the website
const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>

      <div className="App">
        

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/select' element={<SelectPage />} />
          <Route path='/plan' element={<PlanPage />} />
          <Route path="/dashboard" element={<AccountDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/results-list" element={<ForestResultsList />} />
          <Route path="/results-page" element={<ForestResultsPage />} />
          <Route path="/plant-list" element={<PlantListPage />} />
          <Route path="/edit-plants" element={<EditPlants />} />
          <Route path="/edit-forests" element={<EditForests />} />
          <Route path="/edit-list" element={<GenericEditList />} />
          <Route path="/edit-page" element={<GenericEditPage />} />
          <Route path="/browseforests" element={<BrowseForests />} />
          <Route path="/browseplants" element={<BrowsePlants />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/browse-forest-page" element={<BrowseForestPage />} />
          <Route path="/browse-plant-list" element={<BrowsePlantList />} />
        </Routes>

        
      </div>
    </ThemeProvider>
  );
}

export { App as default };
