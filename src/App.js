import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from 'pages/home';
import Dashboard from 'pages/dashboard';
import ArchytypeSelection from 'pages/archytype-selection';
import ContentGeneration from 'pages/content-generation';
import Customization from 'pages/customization';
import ContentPreview from 'pages/preview';
import Analytics from 'pages/analytics';

import './App.css';

function App() {
  return (
    <div className="app">
      <Box sx={{ flexGrow: 1, height: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="selection" element={<ArchytypeSelection />} />
            <Route path="engine" element={<ContentGeneration />} />
            <Route path="custom" element={<Customization />} />
            <Route path="preview" element={<ContentPreview />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>
        </Routes>
      </Box>
    </div>
  );
}

export default App;
