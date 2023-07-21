import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Nav from '../components/Nav';

export default function Info() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom align="center">
        Info
      </Typography>
      <Nav></Nav>
    </Container>
  );
}