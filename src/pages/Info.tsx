import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Nav from '../components/Nav';
import Rules from '../components/Rules';

export default function Info() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom align="center">
        Info
      </Typography>
      <Rules></Rules>
      <Nav></Nav>
    </Container>
  );
}