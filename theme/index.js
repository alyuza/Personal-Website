import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: '"Nunito Sans", sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': ['Nunito Sans'],
      },
    },
  },
  h1: {
    fontFamily: '"Nunito Sans", sans-serif',
    fontWeight: 600, // Adjust according to your requirement
  },
  h2: {
    fontFamily: '"Nunito Sans", sans-serif',
    fontWeight: 600, // Adjust according to your requirement
  },
  h3: {
    fontFamily: '"Nunito Sans", sans-serif',
    fontWeight: 600, // Adjust according to your requirement
  },
  h4: {
    fontFamily: '"Nunito Sans", sans-serif',
    fontWeight: 600, // Adjust according to your requirement
  },
  h5: {
    fontFamily: '"Nunito Sans", sans-serif',
    fontWeight: 600, // Adjust according to your requirement
  },
  h6: {
    fontFamily: '"Nunito Sans", sans-serif',
    fontWeight: 600, // Adjust according to your requirement
  },
});

export default theme;
