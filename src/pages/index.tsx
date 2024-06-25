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
      <Typography variant="h2" gutterBottom component="h1">
        Welcome to Pub Golf
      </Typography>
      <Typography variant="h6" sx={{ mx: 'auto', maxWidth: 600, mb: 4 }}>
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
      <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
        <Typography variant="body1" gutterBottom>
          To get started, create a new game or join an existing game by entering the game identifier below.
        </Typography>
        <CreateGameForm />
        <JoinGameForm gameIdentifier={identifier as string}/>
      </Paper>
    </Box>
  );
};

export default Home;
