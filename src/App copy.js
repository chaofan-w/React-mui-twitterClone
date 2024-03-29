import * as React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserHomePage from "./UserHomePage";
import { Box, Paper, Grid } from "@mui/material";
import SideNavBar from "./SideNavBar";
import SearchAppBar from "./SearchBar";
import WhatsHappening from "./WhatsHappening";
import WhotoFollow from "./WhotoFollow";
import Home from "./Home";

const AppWithRouter = () => {
  let barTimeout;
  document.body.onscroll = () => {
    if (barTimeout) {
      clearTimeout(barTimeout); //clear to reset
    }
    barTimeout = setTimeout(() => {
      document.body.classList.remove("scrolling");
    }, 500); //0.5s delay
    document.body.classList.add("scrolling");
  };

  return (
    <Router>
      <Box
        sx={{
          width: "fit-content",
          height: "fit-content",
          minHeight: "100vh",
          maxWidth: "100vw",
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
            md={3.2}
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
                  display: "none",
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
            md={5.6}
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
            md={3.2}
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
                // right: 0,

                overflowY: "scroll",
                overflowX: "visible",
                // ml: 0,
                // pr: 3,
                // pt: 3,
                // border: "1px solid green",
                //styling the scroll bar by select psedo element
                "&::-webkit-scrollbar": {
                  width: 0,
                  display: "none",
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
                  sx={{ bgcolor: "rgb(247,249,249)", width: "100%" }}
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
