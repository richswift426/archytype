import { useState, useEffect } from 'react';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  FormControl,
  Typography,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Snackbar,
} from '@mui/material';

import Quiz from 'components/quiz';
import { archetypes } from 'constants/archetypes';
import { quizzes } from 'constants/quiz';

const archyStats = archetypes.map(({ name }) => {
  return [name, 0];
});

export default function ArchytypeSelection() {
  const [archytype, setArchytype] = useState('');
  const [quizIndex, setQuizIndex] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [archytypeDesc, setArchytypeDesc] = useState(
    'Explanation of Archetype selected'
  );
  const [quiz, setQuiz] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setOpen(true);
    setArchytype(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const savedArchtype = JSON.parse(localStorage.getItem('archytype'));
    if (savedArchtype && savedArchtype?.length) {
      setArchytype(savedArchtype);
    }
  }, []);

  useEffect(() => {
    return () => {
      localStorage.setItem('archytype', JSON.stringify(archytype));
    };
  });

  const calcArchytypes = (answer) => {
    const [quizNum, answerIndex] = answer;
    const { answers } = quizzes[quizNum];
    const selectedAnswer = answers[answerIndex];
    if (Array.isArray(selectedAnswer)) {
      selectedAnswer.map((item) =>
        archyStats.forEach((archy) => {
          if (archy[0] === item) {
            archy[1]++;
          }
        })
      );
    } else {
      archyStats.forEach((archy) => {
        if (archy[0] === selectedAnswer) {
          archy[1]++;
        }
      });
    }
    const [result] = archyStats.sort((a, b) => b[1] - a[1]);
    return result[0];
  };

  const forwardQuiz = (answer) => {
    if (Number(quizIndex) + 1 < quizzes.length) {
      calcArchytypes(answer);
      setQuizIndex(quizIndex + 1);
    } else {
      const yourArchy = calcArchytypes(answer);
      setQuiz(false);
      setArchytype(yourArchy);
    }
  };

  const prevQuiz = () => {
    if (quizIndex - 1 >= 0) {
      setQuizIndex(quizIndex - 1);
    }
  };

  useEffect(() => {
    const selected = archetypes.filter((item) => item.name === archytype);
    if (selected.length) {
      setArchytypeDesc(selected[0].explanation);
    }
  }, [archytype]);

  useEffect(() => {
    setCompleted((quizIndex / quizzes.length) * 100);
  }, [quizIndex]);

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
                {archetypes.map(({ name }, index) => (
                  <MenuItem value={name} key={index}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: '100%' }}
            >
              {`You selected ${archytype} archytype`}
            </Alert>
          </Snackbar>
          <Grid item md={8}>
            <Paper
              square
              colorSecondary
              elevation={3}
              sx={{
                lineHeight: 1.3,
                minWidth: 300,
                minHeight: 200,
                p: 4,
                color: '#42af73',
                fontSize: '3rem',
              }}
            >
              {archytypeDesc}
            </Paper>
          </Grid>
        </Grid>
        {quiz ? (
          <Quiz
            quiz={quizzes[quizIndex]}
            quizNum={quizIndex}
            completed={completed}
            prevQuiz={prevQuiz}
            forwardQuiz={forwardQuiz}
          />
        ) : archytype ? (
          <Alert severity="success" sx={{ marginTop: 4 }}>
            <AlertTitle>Success</AlertTitle>
            <Typography
              variant="h4"
              component="h4"
              sx={{ marginTop: 4, marginBottom: 4 }}
            >
              Your archytype is — <strong>{archytype}!</strong>
            </Typography>
          </Alert>
        ) : (
          <Box sx={{ mt: 10, textAlign: 'center' }}>
            <div>Not sure what archetype your brand is?</div>
            <Button
              sx={{ mt: 8, p: 4, fontSize: '1.5rem' }}
              variant="outlined"
              size="large"
              onClick={() => setQuiz(true)}
            >
              Take the Quiz to find out yours
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
}
