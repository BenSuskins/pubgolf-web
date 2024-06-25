import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Button, Paper } from '@mui/material';
import { getPlayers } from '../services/api';
import { getGameIdentifier } from '@/utils/utils';
import ScoreboardTable from '../components/ScoreboardTable';
import { routes } from '@/utils/constants';

interface Player {
    name: string;
    scores: number[];
    totalScore: number;
}

const GamePage = () => {
    const router = useRouter();
    const [players, setPlayers] = useState<Player[]>([]);
    const [gameIdentifier, setGameIdentifier] = useState('');

    const fetchPlayers = async () => {
        const playersData = await getPlayers();
        setPlayers(playersData);
    };

    const fetchGameIdentifier = async () => {
        const identifier = getGameIdentifier();
        setGameIdentifier(identifier);
    };

    const handleScoreSubmit = () => {
        router.push(routes.SUBMIT);
    };

    const handleHowToPlay = () => {
        router.push(routes.RULES);
    };

    useEffect(() => {
        fetchPlayers();
        const interval = setInterval(fetchPlayers, 30000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        fetchGameIdentifier();
    }, []);

    return (
        <Box sx={{
            mt: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 3,
            mx: 'auto',
            my: 2,
            maxWidth: '1000px',
            backgroundColor: '#2e2e2e', // Dark background to match the theme
            borderRadius: 2,
            boxShadow: 5,
        }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#fff' }}>
                Scoreboard
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ color: '#fff' }}>
                <em>Game - {gameIdentifier}</em>
            </Typography>
            <ScoreboardTable players={players} />
            <Paper sx={{ mt: 4, p: 3, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3 }}>
                <Button
                    variant="contained"
                    sx={{ mb: 2, bgcolor: '#4caf50', '&:hover': { bgcolor: '#45a049' }, width: '200px' }}
                    onClick={handleScoreSubmit}
                >
                    Submit Score
                </Button>
                <Button
                    variant="contained"
                    sx={{ bgcolor: '#4caf50', '&:hover': { bgcolor: '#45a049' }, width: '200px' }}
                    onClick={handleHowToPlay}
                >
                    How to Play
                </Button>
            </Paper>
        </Box>
    );
};

export default GamePage;