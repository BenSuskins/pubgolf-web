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
    fetch('http://192.168.0.120:8080/api/v1/scores')
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
    <Box sx={{ width: '100%' }}>
      {
        errors ? <Box><Alert severity="error">{errors}</Alert><br></br> </Box> : ''
      }
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer >
          <Table size='medium'>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Hole 1</TableCell>
                <TableCell align="right">Hole 2</TableCell>
                <TableCell align="right">Hole 3</TableCell>
                <TableCell align="right">Hole 4</TableCell>
                <TableCell align="right">Hole 5</TableCell>
                <TableCell align="right">Hole 6</TableCell>
                <TableCell align="right">Hole 7</TableCell>
                <TableCell align="right">Hole 8</TableCell>
                <TableCell align="right">Hole 9</TableCell>
                <TableCell align="right">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.holeOne}</TableCell>
                  <TableCell align="right">{row.holeTwo}</TableCell>
                  <TableCell align="right">{row.holeThree}</TableCell>
                  <TableCell align="right">{row.holeFour}</TableCell>
                  <TableCell align="right">{row.holeFive}</TableCell>
                  <TableCell align="right">{row.holeSix}</TableCell>
                  <TableCell align="right">{row.holeSeven}</TableCell>
                  <TableCell align="right">{row.holeEight}</TableCell>
                  <TableCell align="right">{row.holeNine}</TableCell>
                  <TableCell align="right">{row.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}