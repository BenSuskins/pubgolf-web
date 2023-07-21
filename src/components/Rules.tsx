import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Rules() {
  return (
    <Container>
      <Typography variant="h5" gutterBottom align="center">
        Traditional Route
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>Tequila</b></TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>Beer</b></TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>Wine</b></TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>Cider</b></TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>Cocktail</b></TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>Spirit & Mixer</b></TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>Guiness</b></TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>Jagerbomb</b></TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>VK</b></TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>Total</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
            >
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">1</TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">3</TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">2</TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">2</TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">2</TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">2</TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">4</TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">1</TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">1</TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">18</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
      <Typography variant="h5" gutterBottom align="center">
        Alternate Route
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>Sambuca</b></TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>Double Vodka & Mixer</b></TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>Gin & Mixer</b></TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>Rum & Mixer</b></TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>Cocktail</b></TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>Whiskey & Mixer</b></TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>Double Spirit & Mixer</b></TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>Jagerbomb</b></TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>VK</b></TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center"><b>Total</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
            >
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">1</TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">3</TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">2</TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">2</TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">2</TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">2</TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">4</TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">1</TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">1</TableCell>
              <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} align="center">18</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
      <Typography variant="h5" gutterBottom align="center">
        Rules
      </Typography>
      <Typography variant="body1" gutterBottom align="center">
        1. Vomitting <b>+10 Points</b>. <br></br>
        2. Skipping a hole <b > +10 Points</b>. <br></br>
        3. Doing 2 drinks <b >-1 Point</b>. <br></br>
        4. A <b >Sip</b> lasts <b >1</b> Minute. <br></br>
        5. If it stops touching your lip it stops being <b >one</b> sip.
      </Typography>
    </Container>
  );
}