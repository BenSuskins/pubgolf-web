// pages/game.tsx
import { styled } from '@mui/system';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { getPlayers } from '../services/api';
import { getGameIdentifier } from '@/services/utils';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.action.hover,
    fontWeight: 'bold',
}));

const StickyTableCell = styled(TableCell)(({ theme }) => ({
    position: 'sticky',
    left: 0,
    backgroundColor: theme.palette.background.paper, // Ensure the cell background isn't transparent
    zIndex: 1, // Ensure it stays above the row's cells but below the header
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
}));

const GamePage = () => {
    const router = useRouter();
    const [players, setPlayers] = useState([]);
    const [gameIdentifier, setGameIdentifier] = useState('');

    const fetchPlayers = async () => {
        const playersData = await getPlayers();
        setPlayers(playersData);
    };

    const fetchGameIdentifier = async () => {
        const gameIdentifier = getGameIdentifier();
        setGameIdentifier(gameIdentifier);
    };

    useEffect(() => {
        fetchPlayers();
        const interval = setInterval(fetchPlayers, 30000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        fetchGameIdentifier();
    }, [])

    const handleScoreSubmit = () => {
        router.push(`/submit-score`);
    };

    return (
        <Box sx={{
            mt: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',  // This centers the children horizontally
            p: 3,
            mx: 'auto',
            my: 2
        }}>
            <Typography variant="h4" gutterBottom>
                Scoreboard - {gameIdentifier}
            </Typography>
            <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
                <Table stickyHeader aria-label="scoreboard table">
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
                                <StickyTableCell component="th" scope="row">
                                    {player.name}
                                </StickyTableCell>
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