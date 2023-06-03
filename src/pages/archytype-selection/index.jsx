import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from '@mui/material';

import { archetypes } from 'constants/archetypes';

export default function ArchytypeSelection() {
  const [archytype, setArchytype] = useState('');
  const [archytypeDesc, setArchytypeDesc] = useState(
    'Explanation of Archetype selected'
  );
  const archetypesname = archetypes.map(({ name, explanation }) => {
    return name;
  });

  const handleChange = (event) => {
    setArchytype(event.target.value);
  };

  useEffect(() => {
    const selected = archetypes.filter((item) => item.name === archytype);
    if (selected.length) {
      setArchytypeDesc(selected[0].explanation);
    }
  }, [archytype]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item md={4}>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel>Your ArchyType</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={archytype}
                label="Your ArchyType"
                onChange={handleChange}
              >
                {archetypesname.map((item, index) => (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={8}>
            <Paper
              square
              sx={{
                lineHeight: 2,
                minWidth: 300,
                minHeight: 200,
                p: 4,
              }}
            >
              {archytypeDesc}
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ mt: 10, textAlign: 'center' }}>
          <div>Not sure what archetype your brand is?</div>
          <Button
            sx={{ mt: 8, p: 4, fontSize: '1.5rem' }}
            variant="outlined"
            size="large"
          >
            Take the Quiz to find out yours
          </Button>
        </Box>
      </Box>
    </>
  );
}
