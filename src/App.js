import { Routes, Route } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import Sidebar from 'layout/Sidebar';
import ArchytypeSelection from 'pages/archytype-selection';
import ContentGeneration from 'pages/content-generation';
import Customization from 'pages/customization';
import ContentPreview from 'pages/preview';
import Analytics from 'pages/analytics';

import './App.css';

function App() {
  return (
    <div className="app">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item md={4}>
            <Sidebar />
          </Grid>
          <Grid item md={8}>
            <div className="h-screen text-3xl text-gray-700 font-bold p-12">
              <Routes>
                <Route path="selection" element={<ArchytypeSelection />} />
                <Route path="engine" element={<ContentGeneration />} />
                <Route path="custom" element={<Customization />} />
                <Route path="preview" element={<ContentPreview />} />
                <Route path="analytics" element={<Analytics />} />
              </Routes>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
