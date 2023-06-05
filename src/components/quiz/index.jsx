import { useState, useEffect } from 'react';
import {
  Button,
  ButtonGroup,
  Box,
  Typography,
  LinearProgress,
  Container,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from '@mui/material';

export default function Quiz({ quizNum, quiz }) {
  useEffect(() => {
    console.log(quiz);
  }, [quiz]);

  return (
    <Container>
      <Typography
        variant="h3"
        component="h3"
        sx={{ marginTop: 4, marginBottom: 4 }}
      >
        Find out which one you are...
      </Typography>
      <p className="mb-4">"*" indicates required fields</p>
      <LinearProgress
        variant="determinate"
        value={50}
        sx={{ height: 15, borderRadius: 5, marginBottom: 4 }}
      />
      <p className="mb-2">{`Question #${quizNum}*`}</p>
      <p className="mb-2">{quiz.question}</p>
      <FormControl>
        <RadioGroup>
          {quiz.samples.map((item, index) => (
            <FormControlLabel
              value={item}
              control={<Radio />}
              label={item}
              key={index}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Box sx={{ marginTop: 4 }}>
        <ButtonGroup>
          <Button variant="outlined">Previous</Button>
          <Button variant="contained" color="success">
            Next
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
}
