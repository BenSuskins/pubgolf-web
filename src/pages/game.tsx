// pages/game.tsx
import { styled } from '@mui/system';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { getPlayers } from '../services/api';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.action.hover,
    fontWeight: 'bold',
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
}));

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
                <Table aria-label="scoreboard table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Player Name</StyledTableCell>
                            {Array.from({ length: 9 }, (_, i) => (
                                <StyledTableCell key={i} align="right">Hole {i + 1}</StyledTableCell>
                            ))}
                            <StyledTableCell align="right">Total</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {players.map((player, index) => (
                            <StyledTableRow key={player.name}>
                                <StyledTableCell component="th" scope="row">
                                    {player.name}
                                </StyledTableCell>
                                {player.scores.map((score, i) => (
                                    <TableCell key={i} align="right">{score}</TableCell>
                                ))}
                                <TableCell align="right">{player.totalScore}</TableCell>
                            </StyledTableRow>
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