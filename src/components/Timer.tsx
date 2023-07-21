import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function Timer() {
    return (
        <Container sx={{ alignContent: "center" }} >
            <br></br>
            <Typography variant="h4" gutterBottom align="center">
                Timer
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center">
                <CountdownCircleTimer
                    isPlaying
                    duration={60}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    colorsTime={[7, 5, 2, 0]}
                >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
            </Box>
        </Container>
    )
}