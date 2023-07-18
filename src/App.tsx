import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Scores from './components/Scores';
import Nav from './components/Nav';
import SubmitButton from './components/SubmitButton';


export default function App() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom align="center">
        Pubgolf
      </Typography>
      <Scores></Scores>
      <SubmitButton></SubmitButton>
      <Nav></Nav>
    </Container>
  );
}