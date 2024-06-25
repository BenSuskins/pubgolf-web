// components/JoinGameForm.tsx
import { Button, TextField, Box } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { joinGame } from '../services/api';

const JoinGameForm = () => {
  const [identifier, setIdentifier] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

  const handleJoinGame = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await joinGame(identifier, name);
      router.push(`/game?identifier=${identifier}&name=${name}`);
    } catch (error) {
      console.error('Failed to join game:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleJoinGame} noValidate sx={{ mt: 1 }}>
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
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Join Game
      </Button>
    </Box>
  );
};

export default JoinGameForm;
