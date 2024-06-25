// components/JoinGameForm.tsx
import { Button, TextField, Box, Collapse, Typography, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { joinGame } from '../services/api';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const JoinGameForm = ({ gameIdentifier }) => {
  const [identifier, setIdentifier] = useState('');
  const [name, setName] = useState('');
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (gameIdentifier) {
      setIdentifier(gameIdentifier);
    }
  }, [gameIdentifier]);

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
      <IconButton
        color="primary"
        onClick={toggleFormVisibility}
        sx={{ mt: 2, mb: 2 }}
        size="large"
      >
        <GroupAddIcon fontSize="large" />
        <Typography variant="button" sx={{ ml: 1 }}>
          {showForm ? 'Back' : 'Join a Game'}
        </Typography>
      </IconButton>
      <Collapse in={showForm}>
        <Box component="form" onSubmit={handleJoinGame} noValidate sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
          <TextField
            margin="normal"
            required
            id="name"
            label="Your Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ borderRadius: 1, width: '300px' }}
          />
          <TextField
            margin="normal"
            required
            id="identifier"
            label="Game Identifier"
            name="identifier"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            sx={{ borderRadius: 1, width: '300px' }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2, width: '200px' }}
          >
            Join
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
};

export default JoinGameForm;