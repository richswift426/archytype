import { useEffect, useState } from 'react';
import { Grid, Box, Paper } from '@mui/material';
import Carousel from 'react-grid-carousel';
import CommonExplorer from 'components/explorer';
import Item from 'components/archetype-item';
import { archetypes } from 'constants/archetypes';
import { useAuth } from 'hooks/useAuth';
import { setAuth } from 'utils/setAuth';
import instance from 'utils/axios';

export default function ArchetypeExplorer() {
  const [activeName, setActiveName] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    setAuth(user);
    async function getArchetype() {
      const {
        data: { archetype },
      } = await instance.post('/brand/archetype');
      if (archetype !== null) {
        setActiveName(archetype);
      }
    }

    getArchetype();
  }, []);

  const handleClick = async (e) => {
    setActiveName(e);
    await instance.put('/brand/archetype', { archetype: e });
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
            <Carousel cols={5} rows={1} gap={10}>
              {archetypes.map((item, i) => (
                <Carousel.Item key={i}>
                  <div onClick={() => handleClick(item.name)}>
                    <Item item={item} activeName={activeName} />
                  </div>
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
