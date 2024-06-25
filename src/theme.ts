import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

export const getTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode: mode,
      ...(mode === 'light'
        ? {
            // Palette values for light mode
            primary: { main: '#4caf50' }, // Green color
            secondary: { main: '#ffd700' }, // Gold color
            background: { default: '#f0f0f0', paper: '#ffffff' },
            text: { primary: '#000000', secondary: '#333333' },
          }
        : {
            // Palette values for dark mode
            primary: { main: '#81c784' }, // Lighter green for dark mode
            secondary: { main: '#ffeb3b' }, // Lighter gold for dark mode
            background: { default: '#121212', paper: '#1e1e1e' },
            text: { primary: '#ffffff', secondary: '#bbbbbb' },
          }),
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 700,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 700,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 700,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 700,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 700,
      },
      body1: {
        fontSize: '1rem',
      },
      body2: {
        fontSize: '0.875rem',
      },
      button: {
        fontSize: '0.875rem',
        textTransform: 'none',
      },
    },
  });
};
