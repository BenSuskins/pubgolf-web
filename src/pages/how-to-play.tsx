import { useRouter } from 'next/router';
import { Box, Button, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    zIndex: 2, // Higher z-index for header cells
}));

const HowToPlayPage = () => {
    const router = useRouter();

    const handleBack = () => {
        router.push(`/game`);
    };

    const rules = [
        "Each player must drink the designated drink at each stop.",
        "The par score for each drink represents the expected number of sips to finish the drink.",
        "If you finish your drink in fewer sips than par, your score for that hole is the number of sips you took.",
        "If you take more sips than par, your score for that hole is the number of sips you took.",
        "Each sip can last at most 1 Minute.",
        "Doing additional drinks will lower your score as decided by the referee."
    ];

    const drinks = [
        { pub: 'The Lock Inn / Four Quarters', drink1: 'Tequila (1)', drink2: 'Sambuca (1)' },
        { pub: 'Beer Merchants Tap', drink1: 'Beer (3)', drink2: 'Double Vodka & Single Vodka (3)' },
        { pub: 'No 90', drink1: 'Wine (2)', drink2: 'Double Gin (2)' },
        { pub: 'The Lord Napier Star', drink1: 'Cider (2)', drink2: 'Double Rum (2)' },
        { pub: 'The Kenton Pub', drink1: 'Cocktail (2)', drink2: 'Cocktail (2)' },
        { pub: 'Peoples Park Tavern', drink1: 'Spirit Mixer (2)', drink2: 'Spirit Mixer (2)' },
        { pub: 'The Lauriston', drink1: 'Guiness (4)', drink2: '2 x Double Whiskey (2)' },
        { pub: 'Off Broadway', drink1: 'Jagerbomb (1)', drink2: 'Jagerbomb (1)' },
        { pub: 'Sebright Arms', drink1: 'VK (1)', drink2: 'Smirnoff (1)' },
    ];

    return (
        <Box sx={{
            mt: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 3,
            mx: 'auto',
            my: 2,
            maxWidth: '800px',
            backgroundColor: '#2e2e2e',
            borderRadius: 2,
            boxShadow: 5,
        }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#fff' }}>
                How to Play
            </Typography>
            <Typography variant="body1" sx={{ color: '#fff', mb: 3 }}>
                Pub Golf is a fun game where players drink a designated drink at each stop and aim to match or beat the par score for each drink. The player with the lowest score at the end of the game wins!
            </Typography>
            <Paper sx={{ p: 3, width: '100%', boxShadow: 3, mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Rules
                </Typography>
                <List>
                    {rules.map((rule, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={`${index + 1}. ${rule}`} sx={{ color: '#fff' }} />
                        </ListItem>
                    ))}
                </List>
            </Paper>
            <Paper sx={{ p: 3, width: '100%', boxShadow: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Drinks and Par Scores
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Pub</StyledTableCell>
                                <StyledTableCell>Drink 1</StyledTableCell>
                                <StyledTableCell>Drink 2</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {drinks.map((drink, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{ color: '#fff' }}>{drink.pub}</TableCell>
                                    <TableCell sx={{ color: '#fff' }}>{drink.drink1}</TableCell>
                                    <TableCell sx={{ color: '#fff' }}>{drink.drink2}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <Button
                variant="outlined"
                onClick={handleBack}
                sx={{ mt: 3, mb: 2, color: '#fff', borderColor: '#4caf50', '&:hover': { borderColor: '#45a049' }, width: '200px' }}
            >
                Back
            </Button>
        </Box>
    );
};

export default HowToPlayPage;