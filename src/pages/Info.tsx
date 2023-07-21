import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Nav from '../components/Nav';
import Rules from '../components/Rules';
import ScrollToTop from '../components/ScrollToTop';

export default function Info() {

  return (
    <Container>
      <ScrollToTop />
      <Box paddingBottom='56px'>
        <Typography variant="h4" gutterBottom align="center">
          Info
        </Typography>
        <Rules></Rules>
      </Box>
      <Nav></Nav>
    </Container>
  );
}