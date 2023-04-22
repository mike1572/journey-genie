import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Height } from '@mui/icons-material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { getSuggestions } from './getSuggestions';

import Back from '../images/background.png'

export default function Home(props: any): JSX.Element {


  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, rgba(61, 57, 57, 0) 50%, rgb(0, 0, 0, 1)), url(${Back})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <Button onClick={_=> getSuggestions('Explorer', 'Los Angeles').then(res=>console.log(`suggestions: ${res}`)) }>Test Cohere</Button>
      <AppBar position="static" sx={{backgroundColor: 'rgba(0, 0, 0, 0)'}} elevation={0}>
        <Toolbar >
          <TravelExploreIcon/>
          <Typography variant="h6" sx={{color: 'white', fontWeight: 600, ml: 1}}>
            JourneyGenie
          </Typography>
        </Toolbar>
      </AppBar>


      <div style={{ textAlign: 'center', marginTop: '50px',display:'flex', justifyContent:'center', height:'70vh', alignItems: 'center', flexDirection:'column'}}>
        <Typography variant="h3" sx={{color: 'white', mx: {xs: 10, md: 40, lg: 60}}}>
          <b>Place Where Your Adventure Awaits</b>
        </Typography>
        <Typography variant="body1" sx={{textAlign: 'center', color: 'white', mx: {xs: 10, md: 40, lg: 60}, my: 2}}>
          Discover the best of any major American city in just 2 steps! Answer a few questions about you and choose a location on the map. Voilà! Get 5 amazing recommendations tailored just for you. Start exploring today!
        </Typography>
        <Button onClick={props.changePage} variant="contained" style={{ marginTop: '20px', backgroundColor: 'white', color: 'black', fontWeight: 700, fontSize: 15, borderRadius: 5 }}>
          Start
        </Button>
      </div>
    </Box>
  );
}

