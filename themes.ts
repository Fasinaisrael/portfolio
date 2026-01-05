'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a855f7',
    },
    secondary: {
      main: '#22d3ee',
    },
    background: {
      default: '#0b0b0f',
      paper: '#121212',
    },
  },
  typography: {
    fontFamily: `'Inter', system-ui, sans-serif`,
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
    },
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;