import React from "react";
import ReactDOM from "react-dom/client";
import AppWithRouter from "./App copy";
import { lightBlue } from "@mui/material/colors";
// import data from "./assets/data.json";
import DefaultStyle from "./globalStyle";

import { ThemeProvider, createTheme, CssBaseline, alpha } from "@mui/material";
import { TweetPostsContextProvider } from "./TweetPostsContext";
import { TweetUserContextProvider } from "./TweetUserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const newData = data.map((user, index) => {
//   const userScreenName = user["userScreenName"];
//   data.forEach((u) => {
//     if (u["userFollowingAccounts"].includes(userScreenName)) {
//       user["userFollowedByAccounts"].push(u["userScreenName"]);
//     }
//   });
//   return user;
// });
// console.log(newData);

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

    myLightBlue: {
      main: alpha(lightBlue[200], 0.25),
      dark: lightBlue[700],
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

// console.log(theme);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DefaultStyle />
      <CssBaseline />
      <TweetUserContextProvider>
        <TweetPostsContextProvider>
          <AppWithRouter />
        </TweetPostsContextProvider>
      </TweetUserContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
