import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

export default function ContentGeneration() {
  const [story, setStory] = useState('');
  const handleChange = (e) => {
    setStory(e.target.value);
  };
  const handleSubmit = () => {
    console.log(story);
  };

  return (
    <>
      <Box
        sx={{
          height: '75%',
          border: 2,
          marginBottom: 2,
          borderRadius: 1,
          padding: 2,
        }}
      >
        Here is ContentGeneration Page
      </Box>
      <Box sx={{ height: '20%' }}>
        <TextField
          multiline
          rows={4}
          label="Start Writing"
          value={story}
          fullWidth
          onChange={handleChange}
        />
        <Button
          variant="outlined"
          size="large"
          sx={{ mt: 1, p: 1 }}
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
      </Box>
    </>
  );
}
