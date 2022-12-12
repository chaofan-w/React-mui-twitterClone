import styled from "styled-components";
import { Box, Paper } from "@mui/material";

import Tweet from "./Tweet";

import avatar from "./assets/Christopher-Wu.png";

const TweetPost = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "inherit",
        width: "inherit",
        // background: "#eee",
        m: 0,
        p: 0,
        bgcolor: "transparent",
      }}
    >
      <Tweet
        tweetContents="useSpring to make animation for the interaction feature"
        displayName="Christopher Wu ✨"
        username="christopher-wu"
        avatarSrc={avatar}
      />
    </Box>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  width: inherit;
  background: #eee;
  margin: 0;
  padding: 0;
`;

export default TweetPost;
