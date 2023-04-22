import React, {Fragment, useState} from 'react';
import './App.css';
import Home from './components/Home';
import Questionnaire from './components/Questionnaire';
import Map from './components/Map';
import { testCohere } from './components/getSuggestions';

function App() {


  let [currentPage, setCurrentPage] = useState<number>(0)

  return (
    <Fragment>

      {
        currentPage === 0 && <Home changePage={() => setCurrentPage(1)}/>
      }

      {
        currentPage === 1 && <Questionnaire changePage={() => setCurrentPage(2)}/>
      }

      {
        currentPage === 2 && <Map/>
      }



    </Fragment>
  );
}

export default App;
