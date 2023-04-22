import React, {Fragment} from 'react';
import './App.css';
import { Toolbar, AppBar } from '@mui/material';
import Map from './components/Map';

function App() {
  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          JourneyGenie
        </Toolbar>
      </AppBar>


      <Map/>


     
    </Fragment>
  );
}

export default App;
