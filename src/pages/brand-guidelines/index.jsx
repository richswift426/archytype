import { useRef } from 'react';
import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import CommonExplorer from 'components/explorer';
import instance from 'utils/axios';

import Upload from 'assets/images/upload_icon.png';

export default function BrandGuidelines() {
  const inputRef = useRef(null);

  const handleUpload = (e) => {
    inputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const fileObj = e.target.files && e.target.files[0];
    if (!fileObj) {
      return;
    }
    const formData = new FormData();
    formData.append('brand', fileObj);
    try {
      await instance.post('/brand', formData);
      e.target.value = null;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CommonExplorer
      title="Brand Guidelines"
      description="Teach Archey about your distinct brand style, tone, and voice, ensuring you never go off-brand ever again."
    >
      <div className="brand-guidelines my-8">
        <Grid container spacing={4}>
          <Grid item md={3} sx={{ maxWidth: '488px' }}>
            <Paper
              elevation={3}
              sx={{
                height: '600px',
                p: 4,
                display: 'flex',
                flexDirection: 'column',
              }}
              onClick={handleUpload}
            >
              <p className="font-bold text-3xl text-center mb-8">File Upload</p>
              <Box
                className="border-dashed border-2 flex-1"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <img src={Upload} alt="upload_icon" className="mx-auto" />
                <input
                  hidden
                  type="file"
                  name="brand"
                  accept=".pdf,.doc,.docx"
                  ref={inputRef}
                  onChange={handleFileChange}
                />
              </Box>
            </Paper>
          </Grid>
          <Grid
            item
            md={9}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                sx={{ borderColor: '#FA437F' }}
              />
              <Button
                variant="contained"
                size="large"
                sx={{
                  height: '56px',
                  fontWeight: 700,
                  fontSize: '20px',
                  mx: 1,
                  backgroundColor: '#FA437F',
                }}
              >
                Send
              </Button>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div className="templates">
        <Box>
          <p className="font-bold text-3xl mb-2">Templates</p>
          <p className="text-2xl mb-8">
            Use these preconfigured prompt templates to help Archey learn about
            your brand.
          </p>
        </Box>
        <Grid container spacing={4}>
          <Grid item md={3}>
            <Paper elevation={3} sx={{ height: '146px' }}></Paper>
          </Grid>
          <Grid item md={3}>
            <Paper elevation={3} sx={{ height: '146px' }}></Paper>
          </Grid>
          <Grid item md={3}>
            <Paper elevation={3} sx={{ height: '146px' }}></Paper>
          </Grid>
        </Grid>
      </div>
    </CommonExplorer>
  );
}
