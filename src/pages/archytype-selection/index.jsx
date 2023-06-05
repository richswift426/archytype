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
import Quiz from 'components/quiz';
import { archetypes } from 'constants/archetypes';
import { quizzes } from 'constants/quiz';

export default function ArchytypeSelection() {
  const [archytype, setArchytype] = useState('');
  const [quizIndex, setQuizIndex] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [archytypeDesc, setArchytypeDesc] = useState(
    'Explanation of Archetype selected'
  );
  const [quiz, setQuiz] = useState(false);

  const archetypesname = archetypes.map(({ name, explanation }) => {
    return name;
  });

  const handleChange = (event) => {
    setArchytype(event.target.value);
  };

  const startQuiz = () => {
    setQuiz(true);
  };

  const forwardQuiz = (answer) => {
    console.log(answer);
    if (quizIndex + 1 < quizzes.length) {
      setQuizIndex(quizIndex + 1);
    } else {
      setArchytype('The Creator');
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
    setCompleted(((quizIndex + 1) / quizzes.length) * 100);
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
        {quiz ? (
          <Quiz
            quiz={quizzes[quizIndex]}
            quizNum={quizIndex}
            completed={completed}
            prevQuiz={prevQuiz}
            forwardQuiz={forwardQuiz}
          />
        ) : (
          <Box sx={{ mt: 10, textAlign: 'center' }}>
            <div>Not sure what archetype your brand is?</div>
            <Button
              sx={{ mt: 8, p: 4, fontSize: '1.5rem' }}
              variant="outlined"
              size="large"
              onClick={startQuiz}
            >
              Take the Quiz to find out yours
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
}
