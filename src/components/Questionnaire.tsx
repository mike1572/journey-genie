import React, {useState} from 'react';
import { List, ListItemButton, ListItemText, Typography, CardContent, Card, Grid, Box, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Height } from '@mui/icons-material';
import QuestionCard from './QuestionCard';
import Back from '../images/background.png'


function Questionnaire(): JSX.Element {

  const questions = [
    'What do you like',
    'sample Ques 2',
  ]
  const options = [
    ['Option A', 'Option B', 'Option C', 'None of your business'],
    ['Not Interested', 'Yes', 'No', 'haha']
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  function handleOptionSelect(option: string) {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = option;
    setSelectedOptions(updatedOptions);
    setCurrentQuestion(currentQuestion + 1);
  }
  return (
    <Box
    display='flex'
    justifyContent='center'
    flexDirection='column'
    sx={{
      backgroundImage: `linear-gradient(to bottom, rgba(61, 57, 57, 0) 90%, rgb(255, 255, 255, 1)), url(${Back})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
    }}
    >
        <Grid container justifyContent="center" >
        {currentQuestion >= questions.length?
          // All questions answered, show results or redirect to next page
          <Typography variant="h4" sx={{color: 'white'}}>All questions answered</Typography>
          :
          <QuestionCard
            question={questions[currentQuestion]}
            options={options[currentQuestion]}
            onSelect={handleOptionSelect}
          />
        }
        </Grid>
    </Box>
  );
}

export default Questionnaire;