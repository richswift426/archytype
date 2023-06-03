import { useState } from 'react';
import {
  Box,
  Grid,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from '@mui/material';

import { archetypes } from 'constants/archetypes';

export default function ArchytypeSelection() {
  const archetypesname = archetypes.map(({ name, explanation }) => {
    return name;
  });
  const [archytype, setArchytype] = useState('');

  const handleChange = (event) => {
    setArchytype(event.target.value);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
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
                <MenuItem value={10 * index} key={index}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={8}></Grid>
      </Box>
    </>
  );
}
