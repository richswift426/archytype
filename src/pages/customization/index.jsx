import { useState, useEffect } from 'react';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  FormControl,
  Typography,
  TextField,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

import { b2bBuyerPersonas, b2cBuyerPersonas } from 'constants/personas';

export default function Customization() {
  const [exclusion, setExclusion] = useState('');
  const [inclusion, setInClusion] = useState('');
  const [b2bPersonas, setb2bPersonas] = useState('');
  const [b2cPersonas, setb2cPersonas] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'exclusion':
        setExclusion(value);
        break;
      case 'inclusion':
        setInClusion(value);
        break;
      default:
        break;
    }
  };

  const handleB2BBuyerPersonas = (e) => {
    setb2bPersonas(e.target.value);
  };

  const handleB2CBuyerPersonas = (e) => {
    setb2cPersonas(e.target.value);
  };

  useEffect(() => {
    console.log(exclusion);
    console.log(inclusion);
  }, [exclusion, inclusion]);

  return (
    <>
      <Alert severity="success">
        <Typography
          variant="h4"
          component="h4"
          sx={{ marginTop: 4, marginBottom: 4 }}
        >
          <strong>Here are the customization Options </strong>
        </Typography>
      </Alert>
      <FormControl sx={{ minWidth: '40%', marginTop: 4 }}>
        <InputLabel>B2B Buyer Personas</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={b2bPersonas}
          label="B2B Buyer Personas"
          onChange={handleB2BBuyerPersonas}
        >
          {b2bBuyerPersonas.map(({ title }, index) => (
            <MenuItem value={title} key={index}>
              {title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: '40%', marginTop: 4, marginLeft: 2 }}>
        <InputLabel>B2C Buyer Personas</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={b2cPersonas}
          label="B2C Buyer Personas"
          onChange={handleB2CBuyerPersonas}
        >
          {b2cBuyerPersonas.map(({ title }, index) => (
            <MenuItem value={title} key={index}>
              {title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        name="exclusion"
        multiline
        label="Exclusion Words or Terms"
        value={exclusion}
        fullWidth
        onChange={handleChange}
        sx={{ marginBottom: 4, marginTop: 4 }}
      />
      <TextField
        name="inclusion"
        multiline
        label="Inclusion Words or Terms"
        value={inclusion}
        fullWidth
        onChange={handleChange}
        sx={{ marginBottom: 4 }}
      />
      <FormControl sx={{ minWidth: '100%' }}>
        <InputLabel>Format (Social, Blog, Description)</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={exclusion}
          label="Exclusion Words or Terms"
          onChange={handleChange}
        >
          {/* {archetypes.map(({ name }, index) => (
            <MenuItem value={name} key={index}>
              {name}
            </MenuItem>
          ))} */}
        </Select>
      </FormControl>
    </>
  );
}
