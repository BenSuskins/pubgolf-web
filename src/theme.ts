import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    background: {
      default: "#FAF9F6"
    },
    primary: {
      main: '#03a9f4',
    },
    secondary: {
      main: '#101691',
    },
    error: {
      main: red.A400,
    }, text: {
      // primary: "#f5f5f5"
    }
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '12px',
          border: '1px solid rgba(224, 224, 224, 1)'
        },
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          maxWidth: '100%',
          overflowX: 'hidden',
          // backgroundColor: "#222222"
        },
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#03a9f4"
        },
      }
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          // backgroundColor: "#222222",
          // color: '#f5f5f5'
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          // color: '#f5f5f5 '
        },
      }
    }
  }
});

export default theme;