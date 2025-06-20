import { ReactNode } from "react";
import {
  ThemeOptions,
  ThemeProvider,
  CssBaseline,
  createTheme,
} from "@mui/material";
import baseTheme from "./theme";

type Props = {
  themeProps: ThemeOptions;
  children: ReactNode;
};

export const SEThemeProvider = ({ themeProps, children }: Props) => {
  const mergedTheme = createTheme(baseTheme, themeProps);

  return (
    <ThemeProvider theme={mergedTheme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
};
