import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserHomePage from "./UserHomePage";
// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";

// import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
// import PatternIcon from "@mui/icons-material/Pattern";
import { Box, Paper, Grid } from "@mui/material";
import styled from "styled-components";
import SideNavBar from "./SideNavBar";
import SearchAppBar from "./SearchBar";
import TweetEditing from "./TweetEditing";
import WhatsHappening from "./WhatsHappening";
import WhotoFollow from "./WhotoFollow";
import SendTweet from "./SendTweet";
import HomeStickyBanner from "./HomeStickyBanner";
import TweetPostsContext from "./TweetPostsContext";
import Home from "./Home";
import ErrorPage from "./ErroPage";

const AppWithRouter = () => {
  const { tweetState } = React.useContext(TweetPostsContext);

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/profile/:userScreenName",
  //     element: <UserHomePage />,
  //   },
  // ]);
  return (
    <Router>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          maxWidth: "1280px",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            width: 0,
          },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            maxWidth: "100%",
            minWidth: "500px",
            height: "100%",

            margin: "0 auto",
          }}
        >
          <Grid
            item
            xs
            sm="auto"
            md="auto"
            lg="auto"
            xl="auto"
            sx={{
              // border: "1px solid green",
              minWidth: {
                sm: "80px",
                md: "240px",
                lg: "240px",
              },
            }}
          >
            <Box
              component="div"
              sx={{
                height: "100%",
                position: "fixed",
                zIndex: 200,
                top: 0,
                overflowY: "scroll",
                overflowX: "visible",
                "&::-webkit-scrollbar": {
                  width: 0,
                },
              }}
            >
              <SideNavBar />
            </Box>
          </Grid>
          <Grid
            item
            xs={10}
            sm={10}
            md={5.4}
            lg
            xl
            sx={{ position: "relative" }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/profile/:userScreenName"
                element={<UserHomePage />}
              />
            </Routes>
            {/* <RouterProvider router={router} /> */}
          </Grid>
          <Grid
            item
            lg="auto"
            xl="auto"
            md="auto"
            sx={{
              // border: "1px solid yellow",
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 3,
              position: "relative",
              // maxWidth: "100%",
              // width: "fit-content",
              // border: "1px solid red",
              minWidth: {
                md: "240px",
                lg: "240px",
              },
            }}
          >
            <Box
              sx={{
                maxWidth: "100%",
                width: "fit-content",
                minWidth: "240px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 3,

                //control specific component to stick to top and scroll for overflow
                position: "fixed",
                top: 0,
                overflowY: "scroll",
                overflowX: "visible",
                // ml: 0,
                // pr: 3,
                // pt: 3,
                // border: "1px solid green",
                //styling the scroll bar by select psedo element
                "&::-webkit-scrollbar": {
                  width: 0,
                },
              }}
            >
              <Box sx={{ width: "100%" }}>
                <SearchAppBar />
              </Box>
              <Box sx={{ width: "100%", borderRadius: 0 }}>
                <Paper
                  // variant="outlined"
                  elevation={0}
                  sx={{ bgcolor: "rgb(247,249,249)" }}
                >
                  <WhatsHappening />
                </Paper>
              </Box>
              <Box sx={{ width: "100%", borderRadius: 0 }}>
                <Paper
                  // variant="outlined"
                  elevation={0}
                  sx={{ bgcolor: "rgb(247,249,249)" }}
                >
                  <WhotoFollow />
                </Paper>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Router>
  );
};

export default AppWithRouter;
