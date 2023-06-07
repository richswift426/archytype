import { useEffect } from 'react';
import { Box } from '@mui/material';

export default function PromptField({ prompt, left }) {
  useEffect(() => {
    // console.log(left);
  });

  return (
    <Box
      sx={{
        alignSelf: left ? 'flex-start' : 'flex-end',
        width: 'fit-content',
        borderRadius: 2,
        backgroundColor: left ? '#ecf5de' : '#f3cbcb',
        padding: 2,
        marginBottom: 1,
      }}
    >
      {prompt}
    </Box>
  );
}
