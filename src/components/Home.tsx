import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Height } from '@mui/icons-material';

function Home(): JSX.Element {
  return (
    <Box >
      <AppBar position="static">
        <Toolbar >
          <Typography variant="h6">
            JourneyGenie
          </Typography>
        </Toolbar>
      </AppBar>


      <div style={{ textAlign: 'center', marginTop: '50px',display:'flex', justifyContent:'center', height:'75vh', alignItems: 'center', flexDirection:'column'}}>
        <Typography variant="h3">
          <b>Place Where Your Adventure Awaits</b>
        </Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Start
        </Button>
      </div>
    </Box>
  );
}

export default Home;
