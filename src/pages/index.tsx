// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Typography } from '@mui/material';
import CreateGameForm from '../components/CreateGameForm';
import JoinGameForm from '../components/JoinGameForm';

const Home: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3, textAlign: 'center' }}>
      <Head>
        <title>Pub Golf</title>
      </Head>
      <Typography variant="h4" gutterBottom component="h1">
        Welcome to Pub Golf
      </Typography>
      <CreateGameForm />
      <JoinGameForm />
    </Box>
  );
};

export default Home;
