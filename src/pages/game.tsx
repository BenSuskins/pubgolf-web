import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Button, Paper, Snackbar, IconButton, Alert } from '@mui/material';
import { getPlayers } from '../services/api';
import { getGameIdentifier, getShareLink } from '@/utils/utils';
import ScoreboardTable from '../components/ScoreboardTable';
import { routes } from '@/utils/constants';
import ShareIcon from '@mui/icons-material/Share';

interface Player {
    name: string;
    scores: number[];
    totalScore: number;
}

const GamePage = () => {
    const router = useRouter();
    const [players, setPlayers] = useState<Player[]>([]);
    const [gameIdentifier, setGameIdentifier] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

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

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(getShareLink()).then(() => {
            setOpenSnackbar(true);
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
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
            backgroundColor: '#4a555a', // Dark background to match the theme
            borderRadius: 2,
            boxShadow: 5,
        }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                Scoreboard
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="subtitle1" gutterBottom sx={{ color: '#bbbbbb' }}>
                    <em>Game - {gameIdentifier}</em>
                </Typography>
                <IconButton onClick={handleCopyToClipboard} color="primary" size="small">
                    <ShareIcon />
                </IconButton>
            </Box>
            <ScoreboardTable players={players} />
            <Paper sx={{ mt: 4, p: 3, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3 }}>
                <Button
                    variant="contained"
                    sx={{ mb: 2, bgcolor: '#389e5c', '&:hover': { bgcolor: '#45a049' }, width: '200px' }}
                    onClick={handleScoreSubmit}
                >
                    Submit Score
                </Button>
                <Button
                    variant="contained"
                    sx={{ mb: 2, bgcolor: '#389e5c', '&:hover': { bgcolor: '#45a049' }, width: '200px' }}
                    onClick={handleHowToPlay}
                >
                    How to Play
                </Button>
            </Paper>
            <Snackbar open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}>
                <Alert
                    onClose={handleSnackbarClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Game invite copied to clipboard  </Alert>
            </Snackbar>
        </Box>
    );
};

export default GamePage;