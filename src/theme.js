import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Helvetica Neue',
      'SF Pro Display', // Use SF Pro Display as the primary font
      'SF Pro Icons',
      'Helvetica Neue',
      'Helvetica',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeightRegular: 600, // Set the font weight to 600 for boldness
    fontSize: 18, // Set the font size to 32px
    letterSpacing: '-0.003em', // Set the letter spacing
    lineHeight: '1.0834933333', // Set the line height
  },
  palette: {
    primary: {
      main: '#0070C9', // Apple-like blue color
    },
    secondary: {
      main: '#8E8E93', // Apple-like gray color
    },
    common: {
      black: '#000000', // Black
      white: '#FFFFFF', // White
    },
    background: {
      default: '#f4f4f4', // Light gray background
    },
    blue: {
      main: '#0070C9', // Blue
    },
    green: {
      main: '#34C759', // Green
    },
    yellow: {
      main: '#FFCC00', // Yellow
    },
    red: {
      main: '#FF3B30', // Red
    },
    brown: {
      main: '#4A2E28', // Dark brown
    },

    pink: {
      main: '#ff80ab', //light pink
    },
  },
});

export default theme;
