import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

interface JoinProps {
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Join: React.FC<JoinProps> = ({ openState: [open, setOpen] }) => {
  const [name, setName] = React.useState('');
  const [errors, setErrors] = React.useState('')

  const handleClose = () => {
    setErrors('');
    setName('');
    setOpen(false);
  }

  const submitName = () => {
    if (!name) {
      setErrors("Something is missing...");
    } else {
      const requestOptions = {
        method: 'POST'
      };
      fetch(`${process.env.REACT_APP_API_HOST}/api/v1/scores/join/${name}`, requestOptions)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
          return Promise.reject();
        })
        .then(json => localStorage.setItem("id", json))
        .then(()=> handleClose())
        .catch(error => {
          console.log(error);
          setErrors("Something went wrong, please try again")
        });
    }
  }
  return (
    <Box>
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
            Join Game
          </Typography>
          {
            errors ? <Box><Alert severity="error">{errors}</Alert><br></br> </Box> : ''
          }
          <Box
            component="form"
            autoComplete="off">
            <FormControl required>
              <TextField
                id="outlined"
                label="Name"
                value={name}
                required
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value);
                }}
              />
              <br></br>
              <Button variant="contained" onClick={submitName}>Join</Button>
            </FormControl>
          </Box>
        </Box>
      </Modal >
    </Box >
  );
}

export default Join;