// components/JoinGameForm.tsx
import { Button, TextField, Box, Collapse } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { joinGame } from '../services/api';

const JoinGameForm = () => {
  const [identifier, setIdentifier] = useState('');
  const [name, setName] = useState('');
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  const handleJoinGame = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await joinGame(identifier, name);
      router.push(`/game`);
    } catch (error) {
      console.error('Failed to join game:', error);
    }
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Button variant="outlined" color="primary" onClick={toggleFormVisibility}>
        {showForm ? 'Back' : 'Join a Game'}
      </Button>
      <Collapse in={showForm}>
        <Box component="form" onSubmit={handleJoinGame} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Your Name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="identifier"
            label="Game Identifier"
            name="identifier"
            autoComplete="identifier"
            autoFocus
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Join Game
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
};

export default JoinGameForm;
