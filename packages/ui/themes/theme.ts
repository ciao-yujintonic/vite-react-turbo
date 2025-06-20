import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    // ...add your palette
  },
  typography: {
    // ...add your typography
  },
  components: {
    MuiIconButton: {
      styleOverrides: {},
    },
  },
  // ...addtr theme customizations
});

export default baseTheme;
