import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { lightBlue } from "@mui/material/colors";

import { ThemeProvider, createTheme, CssBaseline, Paper } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

//https://mui.com/material-ui/customization/default-theme/
//material ui default theme
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1DA1F2",
      light: lightBlue[100],
      dark: lightBlue[900],
    },
    secondary: {
      main: "#657786",
      light: "#AAB8c2",
      dark: "#14171A",
    },
  },
  typography: {
    fontFamily: "'Helvetica Neue', 'Ubuntu', 'Roboto', sans-serif",
  },
  backgournd: {
    hover: "#F5F8FA",
  },
  spacing: 4,
  // spacing: (factor) => `${0.25 * factor}rem`,
});

console.log(theme);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
