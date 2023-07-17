import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Submit() {
  const [open, setOpen] = React.useState(false);
  const [hole, setHole] = React.useState('');
  const [score, setScore] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Box sx={{
        position: 'fixed', bottom: (theme) => theme.spacing(8), right: (theme) => theme.spacing(2)
      }} >
        <Fab variant="extended" size="medium" color="primary" onClick={handleOpen}>
          <AddIcon sx={{ mr: 1 }} />
          Submit
        </Fab>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 350,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 7,
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2" align='center' gutterBottom>
            Submit Score
          </Typography>
          <Box
            component="form"
            autoComplete="off">
            <FormControl required>
              <InputLabel id="select-hole-label">Hole</InputLabel>
              <Select
                labelId="select-hole-label"
                id="select-hole"
                value={hole}
                label="Hole"
                autoWidth
                onChange={(event: SelectChangeEvent) => {
                  setHole(event.target.value as string);
                }}
              >
                <MenuItem value={'ONE'}>One</MenuItem>
                <MenuItem value={'TWO'}>Two</MenuItem>
                <MenuItem value={'THREE'}>Three</MenuItem>
                <MenuItem value={'FOUR'}>Four</MenuItem>
                <MenuItem value={'FIVE'}>Five</MenuItem>
                <MenuItem value={'SIX'}>Six</MenuItem>
                <MenuItem value={'SEVEN'}>Seven</MenuItem>
                <MenuItem value={'EIGHT'}>Eight</MenuItem>
                <MenuItem value={'NINE'}>Nine</MenuItem>
              </Select>
              <br></br>
              <TextField
                id="outlined-number"
                label="Score"
                value={score}
                required
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setScore(event.target.value);
                }}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: -10, max: 10 }}
              />
              <br></br>
              <Button variant="contained" onClick={handleOpen}>Submit</Button>
            </FormControl>
          </Box>
        </Box>
      </Modal >
    </Box >
  );
}