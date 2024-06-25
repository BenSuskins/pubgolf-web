import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { createGame } from '../services/api';

const CreateGameButton = () => {
  const router = useRouter();

  const handleCreateGame = async () => {
    try {
      const game = await createGame();
      router.push(`/game?identifier=${game.identifier}`);
    } catch (error) {
      console.error('Failed to create game:', error);
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handleCreateGame}>
      Create Game
    </Button>
  );
};

export default CreateGameButton;