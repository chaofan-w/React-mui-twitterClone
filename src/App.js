import * as React from "react";

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

const App = () => {
  const { tweetState } = React.useContext(TweetPostsContext);
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "auto",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: "1080px",
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
          // sx={{ border: "1px solid green"
          // }}
        >
          <SideNavBar />
        </Grid>
        <Grid item xs={10} sm={10} md={5.4} lg sx={{ position: "relative" }}>
          <Box
            sx={{ position: "sticky", top: 0, zIndex: 200, maxWidth: "100%" }}
          >
            <HomeStickyBanner />
          </Box>
          <Box sx={{ maxWidth: "100%" }}>
            <SendTweet />
          </Box>
          <Box>
            {tweetState &&
              tweetState.map((tweet) => (
                <TweetEditing key={tweet["tweetId"]} tweet={tweet} />
              ))}
          </Box>
        </Grid>
        <Grid
          item
          lg={3.5}
          md={3.2}
          sx={{
            // border: "1px solid yellow",
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
            },
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 3,
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
