// components/CreateGameButton.tsx
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
    <button onClick={handleCreateGame}>Create Game</button>
  );
};

export default CreateGameButton;
