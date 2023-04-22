import React, {Fragment, useState} from 'react';
import './App.css';
import Home from './components/Home';
import Questionnaire from './components/Questionnaire';
import Map from './components/Map';

function App() {


  let [currentPage, setCurrentPage] = useState<number>(2)

  return (
    <Fragment>

      {
        currentPage === 0 && <Home changePage={() => setCurrentPage(1)}/>
      }

      {
        currentPage === 1 && <Questionnaire/>
      }

      {
        currentPage === 2 && <Map/>
      }



    </Fragment>
  );
}

export default App;
