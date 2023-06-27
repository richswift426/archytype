import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import Sidebar from 'layout/Sidebar';

export default function Dashboard() {
  return (
    <>
      <Grid container>
        <Grid item md={2}>
          <Sidebar />
        </Grid>

        <Grid item md={10}>
          <div className="h-screen text-3xl text-gray-700 font-bold p-10">
            <Outlet />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
