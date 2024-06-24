// components/ScoreBoard.tsx
import { useEffect, useState } from 'react';
import { getPlayers, submitScore } from '../services/api';

const ScoreBoard = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const playersData = await getPlayers();
      setPlayers(playersData);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch players:', error);
      setLoading(false);
    }
  };

  const handleScoreSubmit = async (playerName, hole, score) => {
    try {
      await submitScore(playerName, hole, score);
      fetchPlayers(); // Refresh the list after updating the score
    } catch (error) {
      console.error('Failed to submit score:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      {players.map(player => (
        <div key={player.name}>
          {player.name} - {player.totalScore}
          {/* Score submission logic here */}
        </div>
      ))}
    </div>
  );
};

export default ScoreBoard;
