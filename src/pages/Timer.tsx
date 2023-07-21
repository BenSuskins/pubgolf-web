import * as React from 'react';
import Timer from '../components/Timer';
import Container from '@mui/material/Container';
import Nav from '../components/Nav';
import ScrollToTop from '../components/ScrollToTop';

export default function TimerPage() {

  return (
    <Container>
      <ScrollToTop />
      <Timer></Timer>
      <Nav></Nav>
    </Container>);
}