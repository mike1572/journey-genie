import React, {useState} from 'react';
import { List, ListItemButton, ListItemText, Typography, CardContent, Card, Grid, Box, Button, AppBar, Toolbar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';


import { Height } from '@mui/icons-material';
import QuestionCard from './QuestionCard';
import Back from '../images/background.png'

import { questions } from '../questions';


function Questionnaire(props: any): JSX.Element {

  // const questions = [
  //   'What do you like',
  //   'sample Ques 2',
  // ]
  // const options = [
  //   ['Option A', 'Option B', 'Option C', 'None of your business'],
  //   ['Not Interested', 'Yes', 'No', 'haha']
  // ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);



  function handleOptionSelect(option: string) {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = option;
    setSelectedOptions(updatedOptions);
    setCurrentQuestion(currentQuestion + 1);
  }

  let handleSet = () => {
    console.log(selectedOptions)
    props.changePage()
  }

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

        <AppBar position="static" sx={{backgroundColor: 'rgba(0, 0, 0, 0)'}} elevation={0}>
          <Toolbar >
            <TravelExploreIcon/>
            <Typography variant="h6" sx={{color: 'white', fontWeight: 600, ml: 1}}>
              JourneyGenie
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ textAlign: 'center', marginTop: '50px',display:'flex', justifyContent:'center', height:'70vh', alignItems: 'center', flexDirection:'column'}}>

        <Box sx={{alignItems: 'center'}}>
          {currentQuestion >= questions.length?
            // All questions answered, show results or redirect to next page
            <Box>
              <Typography variant="h4" sx={{color: 'white'}}>You're all set!</Typography>
              <Button onClick={handleSet} variant="contained" sx={{mt: 2, backgroundColor: 'black', color: 'white', borderRadius: 1, '&:hover': {
                backgroundColor: '#1a1a1a'
              }}}>
                Pick a Destination
              </Button>
            </Box>
            :
            <QuestionCard
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].answer_options}
              onSelect={handleOptionSelect}
            />
          }
        </Box>
        </div>

    </Box>
  );
}

export default Questionnaire;