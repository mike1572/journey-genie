import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Height } from '@mui/icons-material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

import Back from '../images/background.png'

function Home(): JSX.Element {
  return (
    <Box 
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(61, 57, 57, 0) 90%, rgb(255, 255, 255, 1)), url(${Back})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <AppBar position="static" sx={{backgroundColor: 'rgba(0, 0, 0, 0)'}} elevation={0}>
        <Toolbar >
          <TravelExploreIcon/>
          <Typography variant="h6" sx={{color: 'white', fontWeight: 600, ml: 1}}>
            JourneyGenie
          </Typography>
        </Toolbar>
      </AppBar>


      <div style={{ textAlign: 'center', marginTop: '50px',display:'flex', justifyContent:'center', height:'70vh', alignItems: 'center', flexDirection:'column'}}>
        <Typography variant="h3" sx={{color: 'white', mx: {xs: 10, md: 50, lg: 70}}}>
          <b>Place Where Your Adventure Awaits</b>
        </Typography>
        <Typography variant="h6" sx={{textAlign: 'center', color: 'white', mx: {xs: 10, md: 50, lg: 70}, my: 2}}>
          Get tailored recommendations of places to visit based on your mood and personality!
        </Typography>
        <Button variant="contained" style={{ marginTop: '20px', backgroundColor: 'white', color: 'black', fontWeight: 700, fontSize: 15, borderRadius: 5 }}>
          Start
        </Button>
      </div>
    </Box>
  );
}

export default Home;
