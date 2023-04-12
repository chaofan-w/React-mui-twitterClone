import * as React from "react";
import keyWords from "./photoGeneratorKeyWords.js";
//customize mui components from classes

import {
  Box,
  Paper,
} from "@mui/material";
import TweetPost from "./components/TweetPost";

const TweetEditing = ({ tweet }) => {
  return (
    <Box
      // disablePadding
      sx={{
        maxWidth: "100%",
        maxHeight: "100%",
        // width: "fit-content",
        // border: "1px solid blue",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          border: "1px solid rgb(225,225,225) ",
          borderRadius: 0,
          "&:hover": {
            bgcolor: "rgb(247,249,249)",
          },
        }}
      >
        <TweetPost
          key={tweet["tweetId"]}
          tweet={tweet}
          imgUrl={`https://source.unsplash.com/random/600x300/?${
            keyWords[Math.floor(Math.random() * keyWords.length)]
          }`}
        />
      </Paper>
    </Box>
  );
};

export default TweetEditing;
