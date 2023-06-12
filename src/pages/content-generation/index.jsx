import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, TextField, Button, CircularProgress } from '@mui/material';

import PromptField from 'components/prompt';

const instance = axios.create({ baseURL: 'http://67.207.86.221:5000/api' });

export default function ContentGeneration() {
  const [prompt, setPrompt] = useState('');
  const [queries, setQueries] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const savedQueries = JSON.parse(localStorage.getItem('queries'));
    if (savedQueries && savedQueries?.length) {
      setQueries(savedQueries);
    }
  }, []);

  useEffect(() => {
    return () => {
      localStorage.setItem('queries', JSON.stringify(queries));
    };
  });

  useEffect(() => {
    localStorage.setItem('queries', JSON.stringify(queries));
  }, [queries]);

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async () => {
    const archytype = localStorage.getItem('archytype');
    const options = JSON.parse(localStorage.getItem('options'));

    if (prompt.length) {
      const chats = queries;
      setIsTyping(true);
      chats.push({ role: 'user', content: prompt });
      setQueries(chats);
      setPrompt('');
      const {
        data: { text: answer },
      } = await instance.post('/content', { archytype, prompt, options });
      chats.push({ role: 'ai', content: answer });
      setQueries(chats);
      setIsTyping(false);
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
        {queries && queries.length
          ? queries?.map(({ role, content }, index) => (
              <PromptField prompt={content} key={index} left={role === 'ai'} />
            ))
          : ''}
        {isTyping && <CircularProgress disableShrink />}
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
