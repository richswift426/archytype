import { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button } from '@mui/material';

import PromptField from 'components/prompt';

const instance = axios.create({ baseURL: 'http://127.0.0.1:5000' });

export default function ContentGeneration() {
  const [prompt, setPrompt] = useState('');
  const [story, setStory] = useState([]);

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async () => {
    const archytype = localStorage.getItem('archytype');
    if (prompt.length) {
      const {
        data: { text },
      } = await instance.post('api/content', { archytype, prompt });
      setStory([...story, prompt, text]);
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
