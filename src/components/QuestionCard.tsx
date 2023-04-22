import React from 'react';
import { List, ListItemButton, ListItemText, Typography, CardContent, Card, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomListItemButton = styled(ListItemButton)({
    marginBottom: '-5px',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 0, 0.1)',
    },
  });

interface QuestionCardProps {
    question: string;
    options: string[];
    onSelect: (option: string) => void;
}

function QuestionCard(props: QuestionCardProps): JSX.Element {
    const { question, options, onSelect } = props;
    return (
        <Card sx={{width: '100vh', background:'transparent', }}>
        <CardContent>
            <Typography variant="h4" align="center" gutterBottom sx={{color: 'white'}}>
            <b>{question}</b>
            </Typography>
            <Grid container spacing={2} direction='column' maxWidth='100%' alignItems='center' justifyContent="center">
            {options.map((option) => (
                <Grid key={option} item xs={12} sm={6} md={3} >
                <CustomListItemButton  onClick={()=>onSelect(option)} sx={{mx:'xs: 10, md: 50, lg: 70' }}>
                    <ListItemText primaryTypographyProps={{ align: 'center', width:'200px', color:'white', fontWeight: 'bold' }} primary={option}
                    />
                </CustomListItemButton>
                </Grid>
            ))}
            </Grid>
        </CardContent>
        </Card>
    );
    }

    export default QuestionCard;