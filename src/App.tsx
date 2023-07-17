import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Scores from './components/Scores';
import Nav from './components/Nav';
import Submit from './components/Submit';


export default function App() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom align="center">
        Pubgolf
      </Typography>
      <Scores></Scores>
      <Submit></Submit>
      <Nav></Nav>
    </Container>
  );
}