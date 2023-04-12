import * as React from "react";

// import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
// import PatternIcon from "@mui/icons-material/Pattern";
import TweetEditing from "./TweetEditing";
import SendTweet from "./SendTweet";
import HomeStickyBanner from "./HomeStickyBanner";
import TweetPostsContext from "./TweetPostsContext";
import { Box, Typography, Stack, IconButton } from "@mui/material";

import { AutoAwesome } from "@mui/icons-material";

const Home = () => {
  const { tweetState } = React.useContext(TweetPostsContext);
  const homeContent = (
    <React.Fragment>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: "100%",
          height: 48,
          p: 3,
          bgcolor: "transparent",
        }}
      >
        <Typography fontWeight="medium">Home</Typography>
        <IconButton>
          <AutoAwesome />
        </IconButton>
      </Stack>
    </React.Fragment>
  );

  return (
    <Box className="postsSection">
      <Box sx={{ position: "sticky", top: 0, zIndex: 200, maxWidth: "100%" }}>
        <HomeStickyBanner homeContent={homeContent} />
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
    </Box>
  );
};

export default Home;
