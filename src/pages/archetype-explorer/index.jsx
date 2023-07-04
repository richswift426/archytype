import { Button, Grid, Box, Paper } from '@mui/material';
import Carousel from 'react-grid-carousel';

import CommonExplorer from 'components/explorer';

export default function ArchetypeExplorer() {
  const items = [
    {
      name: 'Random Name #1',
      description: 'Hello World!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
    {
      name: 'Random Name #3',
      description: 'Hello World!',
    },
    {
      name: 'Random Name #4',
      description: 'Hello World!',
    },
    {
      name: 'Random Name #5',
      description: 'Hello World!',
    },
    {
      name: 'Random Name #6',
      description: 'Hello World!',
    },
  ];

  const Item = (props) => {
    return (
      <Paper
        variant="outlined"
        square
        sx={{
          height: '200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      >
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
      </Paper>
    );
  };

  return (
    <CommonExplorer
      title="Archetype Explorer"
      description="Every brand has an archetype. Do you know yours?"
    >
      <div className="archetype-explorer">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            my: 8,
          }}
        >
          <div className="text-center font-bold text-3xl pb-4">
            Brand Archetype Quiz
          </div>
          <div>
            <p className="text-2xl pb-4">
              Select the option that best describes your brand:
            </p>
            <Carousel cols={4} rows={1} gap={10}>
              {items.map((item, i) => (
                <Carousel.Item>
                  <Item key={i} item={item} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Paper>
        <div className="templates">
          <Box>
            <p className="font-bold text-3xl mb-2">
              Learn More About Archetypes
            </p>
            <p className="text-2xl mb-8">
              Access the resources below to better understand archetypes and why
              they're used.
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
      </div>
    </CommonExplorer>
  );
}
