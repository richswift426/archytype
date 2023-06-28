import { Outlet } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import Sidebar from 'layout/Sidebar';
import Header from 'layout/Header';

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, height: '100%' }}>
      <Header authenticated={true} />
      <Grid container sx={{ height: '90%' }}>
        <Grid item md={2}>
          <Sidebar />
        </Grid>

        <Grid item md={10} sx={{ p: 4, backgroundColor: '#f9f9f9' }}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}
