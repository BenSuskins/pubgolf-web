// components/CreateGameForm.tsx
import { Button, TextField, Box, Collapse } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { createGame, joinGame } from '../services/api';

const CreateGameForm = () => {
  const [name, setName] = useState('');
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  const handleCreateAndJoinGame = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const game = await createGame();
      await joinGame(game.identifier, name);
      router.push(`/game`);
    } catch (error) {
      console.error('Failed to create and join game:', error);
    }
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Button variant="contained" color="primary" onClick={toggleFormVisibility}>
        {showForm ? 'Back' : 'Create Game'}
      </Button>
      <Collapse in={showForm}>
        <Box component="form" onSubmit={handleCreateAndJoinGame} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Your Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Game
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
};

export default CreateGameForm;
