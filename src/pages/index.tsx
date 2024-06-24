// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import CreateGameButton from '../components/CreateGameButton';
import JoinGameForm from '../components/JoinGameForm';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pub Golf</title>
      </Head>
      <h1>Welcome to Pub Golf</h1>
      <CreateGameButton />
      <JoinGameForm />
    </div>
  );
};

export default Home;
