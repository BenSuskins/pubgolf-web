import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

export default function Scores() {
  const [rows, setRows] = React.useState<any[]>([])
  const [errors, setErrors] = React.useState('')

  const getData = async () => {
    fetch(`${process.env.REACT_APP_API_HOST}/api/v1/scores`)
      .then(response => response.json())
      .then(json => setRows(json))
      .catch(error => {
        console.error(error);
        setErrors(errors)
      });
  };

  React.useEffect(() => {
    getData();
    const intervalCall = setInterval(() => {
      getData();
    }, 5000);
    return () => {
      clearInterval(intervalCall);
    };
  }, []);

  return (
    <Box width={'100%'}>
      {
        errors ? <Box><Alert severity="error">{errors}</Alert><br></br> </Box> : ''
      }
      <Paper>
        <TableContainer>
          <Table size='medium'>
            <TableHead>
              <TableRow>
                <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} ><b>Name</b></TableCell>
                <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="center"><b>Hole 1</b></TableCell>
                <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="center"><b>Hole 2</b></TableCell>
                <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="center"><b>Hole 3</b></TableCell>
                <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="center"><b>Hole 4</b></TableCell>
                <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="center"><b>Hole 5</b></TableCell>
                <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="center"><b>Hole 6</b></TableCell>
                <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="center"><b>Hole 7</b></TableCell>
                <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="center"><b>Hole 8</b></TableCell>
                <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="center"><b>Hole 9</b></TableCell>
                <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="center"><b>Score</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                >
                  <TableCell sx={{ minWidth: 0.1, maxWidth: 0.1 }} component="th" scope="row">
                    <b>{row.name}</b>
                  </TableCell>
                  <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="right">{row.holeOne}</TableCell>
                  <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="right">{row.holeTwo}</TableCell>
                  <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="right">{row.holeThree}</TableCell>
                  <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="right">{row.holeFour}</TableCell>
                  <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="right">{row.holeFive}</TableCell>
                  <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="right">{row.holeSix}</TableCell>
                  <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="right">{row.holeSeven}</TableCell>
                  <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="right">{row.holeEight}</TableCell>
                  <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="right">{row.holeNine}</TableCell>
                  <TableCell sx={{ minWidth: 0.09, maxWidth: 0.09 }} align="right">{row.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}