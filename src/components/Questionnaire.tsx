import React from 'react';
import { List, ListItemButton, ListItemText, Typography, CardContent, Card, Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Height } from '@mui/icons-material';

function Questionnaire(): JSX.Element {

  const sampleQuestions = [
    'What do you like',
    'Do fish sweat?'
  ]
  const sampleOptions = [
    ['Option A', 'Option B', 'Option C', 'None of your business'],
    ['Not Interested', 'Yes', 'No', 'I dont']
  ]

  return (
      <Card sx={{width: '100vh'}}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            <b>What is the capital of France?</b>
          </Typography>
          <Grid container spacing={2} direction='column' maxWidth='100%' alignItems='center' justifyContent="center">
            {['New York', 'Paris', 'London', 'Tokyo'].map((option) => (
              <Grid key={option} item xs={12} sm={6} md={3}>
                <ListItemButton  onClick={()=>console.log(`nice click, option is ${option}`)}>
                  <ListItemText primaryTypographyProps={{ align: 'center', width:'80px' }} primary={option} />
                </ListItemButton>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
  );
}

export default Questionnaire;