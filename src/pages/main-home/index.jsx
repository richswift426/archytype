import { Box, Grid, Card, CardHeader, CardContent } from '@mui/material';

import Line from 'assets/images/line.png';

const contentGeneration = [
  'Email Explorer',
  'Blog Author',
  'Social Media Engine',
  'Google Ad Copy',
  'BrainStorm',
  'Future Module',
];

const brandSettings = [
  'Brand Guidelines',
  'Archetype Explorer',
  'Future Module',
];

export default function MainHome() {
  return (
    <Box sx={{ flexGrow: 1, height: '100%' }}>
      <p className="font-bold text-3xl mb-8">Content Generation</p>
      <Grid container spacing={12}>
        {contentGeneration.map((item) => (
          <Grid item md={4} key={item}>
            <Card sx={{}}>
              <CardHeader
                title={item}
                sx={{ textAlign: 'center' }}
              ></CardHeader>
              <CardContent sx={{ px: 4, pb: 4, pt: 0 }}>
                <img src={Line} alt="Line group" className="w-full" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ my: '24px' }}>
        <p className="font-bold text-3xl mb-8">Brand Settings</p>
        <Grid container sx={{ height: '50%' }} spacing={12}>
          {brandSettings.map((item) => (
            <Grid item md={4} key={item}>
              <Card sx={{}}>
                <CardHeader
                  title={item}
                  sx={{ textAlign: 'center' }}
                ></CardHeader>
                <CardContent sx={{ px: 4, pb: 4, pt: 0 }}>
                  <img
                    src={Line}
                    alt="Line group"
                    className="object-contain w-full"
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
