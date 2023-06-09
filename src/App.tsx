import React, {Fragment, useState} from 'react';
import './App.css';
import Home from './components/Home';
import Questionnaire from './components/Questionnaire';
import Map from './components/Map';

function App() {


  let [currentPage, setCurrentPage] = useState<number>(0)
  let [personality, setPersonality] = useState<string>('')

  return (
    <Fragment>

      {
        currentPage === 0 && <Home changePage={() => setCurrentPage(1)}/>
      }

      {
        currentPage === 1 && <Questionnaire changePage={() => setCurrentPage(2)} changePersonality={setPersonality}/>
      }

      {
        currentPage === 2 && <Map personality={personality}/>
      }



    </Fragment>
  );
}

export default App;
