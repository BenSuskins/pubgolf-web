import { Button, TextField, Box, Collapse } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { joinGame } from '../services/api';

const JoinGameForm: React.FC<JoinGameFormProps> = ({ gameIdentifier }) => {
  const [identifier, setIdentifier] = useState('');
  const [name, setName] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (gameIdentifier) {
      setIdentifier(gameIdentifier);
      setShowForm(true)
    }
  }, [gameIdentifier]);

  const handleJoinGame = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await joinGame(identifier, name);
      router.push(`/game`);
    } catch (error) {
      console.error('Failed to join game:', error);
      setErrorMessage('Failed to join game. Please check the identifier and try again.');
    }
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Button
        onClick={toggleFormVisibility}
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2, width: '200px' }}
      >
        {showForm ? 'Back' : 'Join Game'}
      </Button>
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
            error={!!errorMessage}
            helperText={errorMessage}
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