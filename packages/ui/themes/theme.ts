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
    MuiTooltip: {
      styleOverrides: {
        // TODO: should be updated
      },
    },
  },
  // ...addtr theme customizations
});

export default baseTheme;
