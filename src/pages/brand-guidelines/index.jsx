import { Box, Grid, Paper } from '@mui/material';
import CommonExplorer from 'components/explorer';

export default function BrandGuidelines() {
  return (
    <CommonExplorer
      title="Brand Guidelines"
      description="Teach Archey about your distinct brand style, tone, and voice, ensuring you never go off-brand ever again."
    >
      <div className="brand-guidelines"></div>
      <div className="templates">
        <Box>
          <p className="font-bold text-3xl mb-2">Templates</p>
          <p className="text-2xl mb-8">
            Use these preconfigured prompt templates to help Archey learn about
            your brand.
          </p>
        </Box>
        <Grid container spacing={4}>
          <Grid item md={3}>
            <Paper elevation={3} sx={{ height: '146px' }}></Paper>
          </Grid>
          <Grid item md={3}>
            <Paper elevation={3} sx={{ height: '146px' }}></Paper>
          </Grid>
          <Grid item md={3}>
            <Paper elevation={3} sx={{ height: '146px' }}></Paper>
          </Grid>
        </Grid>
      </div>
    </CommonExplorer>
  );
}
