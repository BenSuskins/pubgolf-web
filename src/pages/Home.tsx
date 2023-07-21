import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Scores from '../components/Scores';
import Nav from '../components/Nav';
import SubmitButton from '../components/SubmitButton';
import Join from '../components/Join';

export default function Home() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const id = localStorage.getItem("id");
    if (!id) {
      setOpen(true);
    }
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" gutterBottom align="center">
        Pubgolf
      </Typography>
      <Join openState={[open, setOpen]}></Join>
      <Scores></Scores>
      <SubmitButton></SubmitButton>
      <Nav></Nav>
    </Container>
  );
}