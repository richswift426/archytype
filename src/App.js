import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from 'pages/home';
import Dashboard from 'pages/dashboard';
import ArchytypeSelection from 'pages/archytype-selection';
import ContentGeneration from 'pages/content-generation';
import Customization from 'pages/customization';
import ContentPreview from 'pages/preview';
import MainHome from 'pages/main-home';
import Explorer from 'layout/Explorer';

import './App.css';

function App() {
  return (
    <div className="app">
      <Box sx={{ flexGrow: 1, height: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="home" element={<MainHome />} />
            <Route path="home/email-explorer" element={<Explorer />} />
            <Route path="history" element={<ContentGeneration />} />
            <Route path="trash" element={<Customization />} />
            <Route path="settings" element={<ContentPreview />} />
          </Route>
        </Routes>
      </Box>
    </div>
  );
}

export default App;
