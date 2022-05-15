import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function LayoutTheme({ children }) {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}

export default LayoutTheme;
