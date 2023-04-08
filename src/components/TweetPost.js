import styled from "styled-components";
import { Box, Paper } from "@mui/material";

import Tweet from "./Tweet";

import avatar from "./assets/Christopher-Wu.png";

const TweetPost = ({ tweet, imgUrl }) => {
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
        tweetContents={tweet["text"]}
        displayName={tweet["userName"]}
        username={tweet["userScreenName"]}
        avatarSrc={tweet["profileImgUrl"]}
        timestamp={tweet["timestamp"]}
        imgAttachment={imgUrl}
        // imgAttachment={tweet["imgAttachmentUrl"]}
        tweet={tweet}
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
