import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    trustPrimary: Palette['primary'];
    trustSecondary: Palette['secondary'];
    trustSuccess: Palette['success'];
    trustBackground: Palette['background'];
  }

  interface PaletteOptions {
    trustPrimary?: PaletteOptions['primary'];
    trustSecondary?: PaletteOptions['secondary'];
    trustSuccess?: PaletteOptions['success'];
    trustBackground?: PaletteOptions['background'];
  }
}

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#459a78',
      light: '#2d3e64',
      dark: '#131a29',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#6fe2b4',
      light: '#8ff7c9',
      dark: '#459a78',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#6fe2b4',
      light: '#8ff7c9',
      dark: '#459a78',
    },
    background: {
      default: '#FFFFFF',
      paper: '#E5EAF0',
    },
    trustPrimary: {
      main: '#1F2A44',
      light: '#2d3e64',
      dark: '#131a29',
      contrastText: '#FFFFFF',
    },
    trustSecondary: {
      main: '#6fe2b4',
      light: '#8ff7c9',
      dark: '#459a78',
      contrastText: '#FFFFFF',
    },
    trustSuccess: {
      main: '#6fe2b4',
      light: '#8ff7c9',
      dark: '#459a78',
    },
    trustBackground: {
      default: '#FFFFFF',
      paper: '#E5EAF0',
    },
    text: {
      primary: '#1F2A44',
      secondary: '#4A5568',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.2,
    },
    button: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
          boxShadow: '0 4px 6px rgba(111, 226, 180, 0.11)',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 7px 14px rgba(111, 226, 180, 0.2)',
          },
        },
        contained: {
          '&:hover': {
            backgroundColor: '#6fe2b4',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
  },
});

export default theme;