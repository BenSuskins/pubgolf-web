import { useRouter } from 'next/router';
import { Box, Button, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import dynamic from 'next/dynamic';
import { drinks, rules, routes } from '@/utils/constants';

// Dynamically import MapComponent
const DynamicMapComponent = dynamic(() => import('../components/Map'), { ssr: false });

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    zIndex: 2, // Higher z-index for header cells
}));

const HowToPlayPage = () => {
    const router = useRouter();

    const handleBack = () => {
        router.push(routes.GAME);
    };

    const polylinePositions: LatLngTuple[] = drinks.map(drink => [drink.lat, drink.lng]);

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
            <Paper sx={{ p: 3, width: '100%', boxShadow: 3, mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Drinks and Par Scores
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Pub</StyledTableCell>
                                <StyledTableCell>Drink A</StyledTableCell>
                                <StyledTableCell>Drink B</StyledTableCell>
                                <StyledTableCell>Par</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {drinks.map((drink, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{ color: '#fff' }}>{drink.pub}</TableCell>
                                    <TableCell sx={{ color: '#fff' }}>{drink.drinkA}</TableCell>
                                    <TableCell sx={{ color: '#fff' }}>{drink.drinkB}</TableCell>
                                    <TableCell sx={{ color: '#fff' }}>{drink.par}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <Paper sx={{ p: 3, width: '100%', boxShadow: 3, mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Route
                </Typography>
                <Box sx={{ width: '100%', height: '400px' }}>
                    <DynamicMapComponent drinks={drinks} polylinePositions={polylinePositions} />
                </Box>
            </Paper>
            <Button
                variant="outlined"
                onClick={handleBack}
                sx={{ mt: 3, mb: 2, color: '#fff', borderColor: '#389e5c', '&:hover': { borderColor: '#45a049' }, width: '200px' }}
            >
                Back
            </Button>
        </Box>
    );
};

export default HowToPlayPage;