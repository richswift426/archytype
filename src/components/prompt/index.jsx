import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';

export default function PromptField({ prompt, left }) {
  useEffect(() => {
    // console.log(left);
  });

  return (
    <Box
      sx={{
        borderRadius: 2,
        backgroundColor: left ? '#ecf5de' : '#f3cbcb',
        padding: 2,
        marginBottom: 1,
      }}
    >
      <Typography variant="h6" sx={{ whiteSpace: 'pre-wrap' }}>
        {prompt}
      </Typography>
    </Box>
  );
}
