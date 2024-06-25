// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Typography, Button, Paper, useMediaQuery, useTheme } from '@mui/material';
import CreateGameForm from '../components/CreateGameForm';
import JoinGameForm from '../components/JoinGameForm';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Home: NextPage = () => {
  const router = useRouter();
  const { identifier } = router.query;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ flexGrow: 1, p: 3, textAlign: 'center' }}>
      <Head>
        <title>Welcome to Pub Golf</title>
      </Head>
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
        }}>        <Typography variant="h2" gutterBottom component="h1">
          Welcome to Pub Golf
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ color: '#bbbbbb' }}>
        Pub Golf is a fun, social game that combines the challenge of golf scoring with the enjoyment of visiting your favorite pubs. Join a game or create a new one to start your adventure!
        </Typography>
        <Box sx={{ my: 4 }}>
          <Image
            src="/pub-golf-theme2.webp"
            alt="Pub Golf"
            width={isMobile ? 300 : 600}
            height={isMobile ? 300 : 600}
          />
        </Box>
        <Typography variant="subtitle1" gutterBottom sx={{ color: '#bbbbbb' }}>
        To get started, create a new game or join an existing game by entering the game identifier below.
        </Typography>
        <Paper sx={{ mt: 4, p: 3, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3 }}>
          <CreateGameForm />
          <JoinGameForm gameIdentifier={identifier as string} />
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
