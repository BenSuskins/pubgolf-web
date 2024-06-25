import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

export const getTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode: mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: { main: '#1976d2' },
            background: { default: '#eaeaea', paper: '#ffffff' },
          }
        : {
            // palette values for dark mode
            primary: { main: '#90caf9' },
            background: { default: '#121212', paper: '#424242' },
          }),
    },
  });
};