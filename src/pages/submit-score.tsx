// pages/submit-score.tsx
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { submitScore } from '../services/api';

const SubmitScorePage = () => {
    const router = useRouter();
    const [hole, setHole] = useState('');
    const [score, setScore] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await submitScore(parseInt(hole), parseInt(score));
            router.push(`/game`);
        } catch (error) {
            console.error('Failed to submit score:', error);
        }
    };

    const handleBack = () => {
        router.push(`/game`);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6">Submit Your Score</Typography>
            <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
                <InputLabel id="hole-label">Hole</InputLabel>
                <Select
                    labelId="hole-label"
                    id="hole"
                    value={hole}
                    label="Hole"
                    onChange={(e) => setHole(e.target.value)}
                >
                    {Array.from({ length: 9 }, (_, i) => (
                        <MenuItem key={i} value={i + 1}>Hole {i + 1}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                required
                fullWidth
                id="score"
                label="Score"
                name="score"
                type="number"
                autoComplete="score"
                autoFocus
                margin="normal"
                value={score}
                onChange={(e) => setScore(e.target.value)}
            />
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Submit
            </Button>
            <Button onClick={handleBack} variant="outlined" sx={{ mt: 1 }}>
                Back
            </Button>
        </Box>
    );
};

export default SubmitScorePage;
