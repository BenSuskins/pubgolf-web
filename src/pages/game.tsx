// pages/game.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { getPlayers } from '../services/api';
import { getGameIdentifier } from '@/services/utils';

const GamePage = () => {
    const router = useRouter();
    const [players, setPlayers] = useState([]);

    const fetchPlayers = async () => {
        const playersData = await getPlayers();
        setPlayers(playersData);
    };

    useEffect(() => {
        fetchPlayers();
        const interval = setInterval(fetchPlayers, 30000); // Refresh every 30 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    const handleScoreSubmit = () => {
        router.push(`/submit-score`);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Scoreboard
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Player Name</TableCell>
                            <TableCell align="right">Total Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {players.map((player) => (
                            <TableRow key={player.name}>
                                <TableCell component="th" scope="row">
                                    {player.name}
                                </TableCell>
                                <TableCell align="right">{player.totalScore}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="primary" sx={{ mt: 4 }} onClick={handleScoreSubmit}>
                Submit Score
            </Button>
        </Box>
    );
};

export default GamePage;
