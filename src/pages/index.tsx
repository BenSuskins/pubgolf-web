// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Typography } from '@mui/material';
import CreateGameForm from '../components/CreateGameForm';
import JoinGameForm from '../components/JoinGameForm';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  const { identifier } = router.query;

  return (
    <Box sx={{ flexGrow: 1, p: 3, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom component="h1">
        Welcome to Pub Golf
      </Typography>
      <CreateGameForm />
      <JoinGameForm gameIdentifier={identifier as string}/>
    </Box>
  );
};

export default Home;
