import { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  TextField,
  MenuItem,
  Paper,
  FormControl,
  InputLabel,
  Select,
  ListSubheader,
  CircularProgress,
} from '@mui/material';

import PromptField from 'components/prompt';
import { b2bBuyerPersonas, b2cBuyerPersonas } from 'constants/personas';

import instance from 'utils/axios';

export default function Explorer({ title, description }) {
  const [content, setContent] = useState('');
  const [inclusion, setInClusion] = useState('');
  const [personas, setPersonas] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [keyQuestions, setKeyQ] = useState('');
  const [topic, setTopic] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(false);

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handlePersonasChange = (e) => {
    setPersonas(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleKeywords = (e) => {
    setInClusion(e.target.value);
  };

  const handleQuestions = (e) => {
    setKeyQ(e.target.value);
  };

  const sendMessage = async () => {
    const archytype = localStorage.getItem('archetype');
    const payload = {
      content,
      inclusion,
      personas,
      wordCount,
      keyQuestions,
      topic,
      archytype,
    };

    if (content.length) {
      const chats = messages;
      setIsTyping(true);
      chats.push({ role: 'user', content });
      setMessages(chats);
      setContent('');
      const {
        data: { answer },
      } = await instance.post('/explorer/blog', payload);
      chats.push({ role: 'ai', content: answer });
      setMessages(chats);
      setIsTyping(false);
    } else {
      setError(true);
      return;
    }
  };

  const clearBoard = () => {
    setMessages([]);
  };

  return (
    <Box>
      <div className="explorer-header mb-10">
        <p className="font-bold text-3xl mb-2">Blog Author</p>
        <p className="text-xl">Turn ideas into SEO optimized blog content.</p>
      </div>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item md={3}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Topic"
            variant="outlined"
            sx={{ mb: 2 }}
            value={topic}
            onChange={handleTopicChange}
          />
          <FormControl fullWidth sx={{ minWidth: '100%', mb: 2 }}>
            <InputLabel>Personas</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={personas}
              label="B2B Buyer Personas"
              onChange={handlePersonasChange}
            >
              <ListSubheader sx={{ fontSize: '1.2rem', color: '#abcced' }}>
                B2B Buyer Personas
              </ListSubheader>
              {b2bBuyerPersonas.map(({ title }, index) => (
                <MenuItem value={title} key={index}>
                  {title}
                </MenuItem>
              ))}
              <ListSubheader sx={{ fontSize: '1.2rem', color: '#abcced' }}>
                B2C Buyer Personas
              </ListSubheader>
              {b2cBuyerPersonas.map(({ title }, index) => (
                <MenuItem value={title} key={index}>
                  {title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            multiline
            fullWidth
            rows={4}
            id="outlined-basic"
            label="Keywords / inclusion"
            variant="outlined"
            sx={{ mb: 2 }}
            value={inclusion}
            onChange={handleKeywords}
          />
          <TextField
            multiline
            fullWidth
            rows={4}
            id="outlined-basic"
            label="Key Questions to Answer"
            variant="outlined"
            sx={{ mb: 2 }}
            value={keyQuestions}
            onChange={handleQuestions}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Word Count"
            variant="outlined"
            sx={{ mb: 2 }}
            value={wordCount}
            onChange={(e) => setWordCount(e.target.value)}
          />
        </Grid>
        <Grid item md={9}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '500px',
              width: '100%',
              boxShadow: 6,
              marginBottom: 4,
              borderRadius: 2,
              padding: 1,
              overflow: 'auto',
              '::-webkit-scrollbar': {
                width: '10px',
              },
              '::-webkit-scrollbar-thumb': {
                height: '50px',
                borderRadius: '10px',
                backgroundColor: 'darkgrey',
              },
            }}
          >
            {messages && messages.length
              ? messages?.map(({ role, content }, index) => (
                  <PromptField
                    prompt={content}
                    key={index}
                    left={role === 'ai'}
                  />
                ))
              : ''}
            {isTyping && <CircularProgress disableShrink />}
          </Box>
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            sx={{ width: '78%' }}
            value={content}
            onChange={handleContentChange}
          />
          <Button
            variant="contained"
            size="large"
            sx={{
              width: '80px',
              height: '56px',
              fontWeight: 700,
              mx: 1,
              backgroundColor: '#FA437F',
            }}
            onClick={sendMessage}
          >
            Send
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              width: '120px',
              height: '56px',
              fontWeight: 700,
              mx: 1,
              borderColor: '#FA437F',
              color: '#FA437F',
              px: 2,
            }}
            onClick={clearBoard}
          >
            New Chat
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ width: '100%' }}>
        <p className="font-bold text-3xl mb-2">Templates</p>
        <p className="text-xl mb-12">
          Use these preconfigured prompt templates for help
        </p>
        <Grid container spacing={4}>
          <Grid item={4}>
            <Paper
              sx={{ height: '150px', width: '300px', textAlign: 'center' }}
            >
              1
            </Paper>
          </Grid>
          <Grid item={4} sx={{ height: '200px' }}>
            <Paper
              sx={{ height: '150px', width: '300px', textAlign: 'center' }}
            >
              1
            </Paper>
          </Grid>
          <Grid item={4} sx={{ height: '200px' }}>
            <Paper
              sx={{ height: '150px', width: '300px', textAlign: 'center' }}
            >
              1
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
