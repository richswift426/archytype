import { useState } from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';

import PromptField from 'components/prompt';

export default function ContentGeneration() {
  const [prompt, setPrompt] = useState('');
  const [story, setStory] = useState([]);
  const [flag, setFlag] = useState(false);

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = () => {
    // setFlag(true);
    if (prompt.length) {
      setStory([...story, prompt]);
      setPrompt('');
    }
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '75%',
          border: 2,
          marginBottom: 2,
          borderRadius: 1,
          padding: 2,
          overflow: 'auto',
        }}
      >
        {story.map((item, index) => (
          <PromptField prompt={item} key={index} left={index % 2} />
        ))}
      </Box>
      <Box sx={{ height: '20%' }}>
        <TextField
          multiline
          rows={4}
          label="Start Writing"
          value={prompt}
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
