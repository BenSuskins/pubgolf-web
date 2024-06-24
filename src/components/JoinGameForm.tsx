// components/JoinGameForm.tsx
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

const JoinGameForm = () => {
  const [identifier, setIdentifier] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

  const joinGame = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post(`/api/games/${identifier}/join`, { name });
      router.push(`/game?identifier=${identifier}&name=${name}`);
    } catch (error) {
      console.error('Failed to join game:', error);
    }
  };

  return (
    <form onSubmit={joinGame}>
      <input
        type="text"
        placeholder="Game Identifier"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
      />
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Join Game</button>
    </form>
  );
};

export default JoinGameForm;
