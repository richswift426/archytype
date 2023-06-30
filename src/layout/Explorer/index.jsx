import { Box, Button, Grid, TextField, MenuItem, Paper } from '@mui/material';

export default function Explorer({ title, description }) {
  return (
    <Box>
      <div className="explorer-header mb-10">
        <p className="font-bold text-3xl mb-2">Email Explorer</p>
        <p className="text-xl">
          Draft relevant and compelling email copy to your target audience
        </p>
      </div>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item md={3}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Recipient Name"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            select
            id="outlined-basic"
            label="Email Type"
            variant="outlined"
            sx={{ mb: 2 }}
          >
            <MenuItem value="Test">Test</MenuItem>
            <MenuItem value="Test">Test</MenuItem>
          </TextField>

          <TextField
            fullWidth
            select
            id="outlined-basic"
            label="Personas"
            variant="outlined"
            sx={{ mb: 2 }}
          >
            <MenuItem value="Test">Test</MenuItem>
            <MenuItem value="Test">Test</MenuItem>
          </TextField>

          <TextField
            multiline
            fullWidth
            rows={4}
            id="outlined-basic"
            label="Keywords / inclusion"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            multiline
            fullWidth
            rows={4}
            id="outlined-basic"
            label="Exclusion words"
            variant="outlined"
            sx={{ mb: 2 }}
          />
        </Grid>
        <Grid item md={9}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '75%',
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
          ></Box>
          <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            sx={{ width: '78%' }}
          />
          <Button
            variant="contained"
            size="large"
            sx={{ width: '120px', height: '56px', fontWeight: 700, mx: 1 }}
          >
            Send
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
