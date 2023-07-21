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
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right"><b>Tequila</b></TableCell>
              <TableCell align="right"><b>Beer</b></TableCell>
              <TableCell align="right"><b>Wine</b></TableCell>
              <TableCell align="right"><b>Cider</b></TableCell>
              <TableCell align="right"><b>Cocktail</b></TableCell>
              <TableCell align="right"><b>Spirit & Mixer</b></TableCell>
              <TableCell align="right"><b>Guiness</b></TableCell>
              <TableCell align="right"><b>Jagerbomb</b></TableCell>
              <TableCell align="right"><b>VK</b></TableCell>
              <TableCell align="right"><b>Total</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">1</TableCell>
              <TableCell align="right">3</TableCell>
              <TableCell align="right">2</TableCell>
              <TableCell align="right">2</TableCell>
              <TableCell align="right">2</TableCell>
              <TableCell align="right">2</TableCell>
              <TableCell align="right">4</TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">18</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
      <Typography variant="h5" gutterBottom align="center">
        Alternate Route
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right"><b>Sambuca</b></TableCell>
              <TableCell align="right"><b>Double Vodka & Mixer</b></TableCell>
              <TableCell align="right"><b>Gin & Mixer</b></TableCell>
              <TableCell align="right"><b>Rum & Mixer</b></TableCell>
              <TableCell align="right"><b>Cocktail</b></TableCell>
              <TableCell align="right"><b>Whiskey & Mixer</b></TableCell>
              <TableCell align="right"><b>Double Spirit & Mixer</b></TableCell>
              <TableCell align="right"><b>Jagerbomb</b></TableCell>
              <TableCell align="right"><b>VK</b></TableCell>
              <TableCell align="right"><b>Total</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">1</TableCell>
              <TableCell align="right">3</TableCell>
              <TableCell align="right">2</TableCell>
              <TableCell align="right">2</TableCell>
              <TableCell align="right">2</TableCell>
              <TableCell align="right">2</TableCell>
              <TableCell align="right">4</TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">18</TableCell>
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