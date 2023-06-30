import { Outlet } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { Sidenav as Sidebar } from 'layout/Sidebar';
import Header from 'layout/Header';

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, height: '100%' }}>
      <Header authenticated={true} />
      <Grid container sx={{ height: '90%' }}>
        <Sidebar />

        <Grid
          item
          md={10}
          sx={{
            p: 6,
            backgroundColor: '#f9f9f9',
            flex: '1 !important',
            maxWidth: 'initial !important',
          }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}
