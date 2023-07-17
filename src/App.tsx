import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicTable from './components/BasicTable';
import Nav from './components/Nav';

export default function App() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Pubgolf
        </Typography>
        <BasicTable></BasicTable>
      </Box>
      <Nav></Nav>
    </Container>
  );
}