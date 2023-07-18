import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Submit from './Submit';

export default function SubmitButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

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
      <Submit openState={[open, setOpen]}></Submit>
    </Box >
  );
}