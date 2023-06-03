import { Box, Grid } from '@mui/material';
import Sidebar from './layout/Sidebar';

import './App.css';

function App() {
  return (
    <div className="app">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={6} lg={4}>
            <Sidebar />
          </Grid>
          <Grid item md={18} lg={16}>
            <h1 className="text-3xl text-gray-700 font-bold mb-5">
              Hello world
            </h1>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
