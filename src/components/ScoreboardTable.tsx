import React from 'react';
import { styled } from '@mui/system';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';
import { drinks } from '@/utils/constants';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    zIndex: 2, // Higher z-index for header cells
}));

const StickyTableCell = styled(TableCell)(({ theme }) => ({
    position: 'sticky',
    left: 0,
    backgroundColor: theme.palette.background.paper,
    zIndex: 1, // Lower z-index for sticky player name cells
    fontWeight: 'bold',
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:hover': {
        backgroundColor: theme.palette.action.selected,
    },
}));

const getScoreColor = (score: number, par: number): string => {
    if (score === par || score === 0) {
        return '#fff';
    } else if (score < par) {
        return '#389e5c';
    } else {
        return '#f44336';
    }
};

const ScoreboardTable: React.FC<ScoreboardTableProps> = ({ players }) => {
    return (
        <TableContainer component={Paper} sx={{ overflowX: 'auto', mt: 2, boxShadow: 3 }}>
            <Table stickyHeader aria-label="scoreboard table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Player Name</StyledTableCell>
                        {drinks.map((_, index) => (
                            <StyledTableCell key={index} align="right">Hole {index + 1}</StyledTableCell>
                        ))}
                        <StyledTableCell align="right">Total</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {players.map((player, index) => (
                        <StyledTableRow key={index}>
                            <StickyTableCell component="th" scope="row">
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    {player.name}
                                </Box>
                            </StickyTableCell>
                            {player.scores.map((score, i) => (
                                <TableCell key={i} align="right" sx={{ color: getScoreColor(score, drinks[i].par) }}>
                                    {score}
                                </TableCell>
                            ))}
                            <TableCell align="right">{player.totalScore}</TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ScoreboardTable;