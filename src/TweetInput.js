import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  IconButton,
  Input,
} from "@mui/material";

import {
  GifBoxOutlined,
  BallotOutlined,
  SentimentSatisfiedOutlined,
  CalendarMonthOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import ReplyAudienceSelectPopover from "./ReplyAudienceSelectPopover copy";
import CircularStatic from "./WordLimitProgress";
import TweetPostsContext from "./TweetPostsContext";
import { v4 as uuidv4 } from "uuid";
import AttachTweetImgPopover from "./AttachTweetImgPopover";

const tweetFeatureIcons = [
  // {
  //   icon: (
  //     <PhotoOutlined
  //       sx={{ width: "20px", height: "20px", color: "primary.main" }}
  //     />
  //   ),
  //   label: "insertPhoto",
  // },
  {
    icon: (
      <GifBoxOutlined
        sx={{ width: "20px", height: "20px", color: "primary.main" }}
      />
    ),
    label: "insertGif",
  },
  {
    icon: (
      <BallotOutlined
        sx={{ width: "20px", height: "20px", color: "primary.main" }}
      />
    ),
    label: "insertPoll",
  },
  {
    icon: (
      <SentimentSatisfiedOutlined
        sx={{ width: "20px", height: "20px", color: "primary.main" }}
      />
    ),
    label: "insertEmoji",
  },
  {
    icon: (
      <CalendarMonthOutlined
        sx={{ width: "20px", height: "20px", color: "primary.main" }}
      />
    ),
    label: "insertSchedule",
  },
  {
    icon: (
      <LocationOnOutlined
        sx={{ width: "20px", height: "20px", color: "primary.main" }}
      />
    ),
    label: "insertLocation",
  },
];

const TweetInput = () => {
  const [value, setValue] = React.useState("");
  const [newTweetImgUrl, setNewTweetImgUrl] = React.useState("");
  const { tweetState, dispatch, loginUserName } =
    React.useContext(TweetPostsContext);

  const handleSendingTweet = (e) => {
    e.preventDefault();
    const tweetId = uuidv4();
    const text = value;
    const imgAttachmentUrl = newTweetImgUrl;
    const timestamp = Math.floor(new Date().getTime() / 1000);
    dispatch({
      type: "sendingNewTweet",
      tweetId: tweetId,
      text: text,
      imgAttachmentUrl: imgAttachmentUrl,
      timestamp: timestamp,
    });
    setValue("");
    setNewTweetImgUrl("");
  };

  return (
    <Box
      component="form"
      sx={{
        width: "100%",
        // border: "1px solid red",
        position: "relative",
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <Input
        disableUnderline={true}
        variant="standard"
        autoFocus
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        placeholder="What's happening?"
        fullWidth
        multiline
        sx={{
          // border: "1px solid green",
          fontSize: "20px",
          width: "100%",
          color: "transparent",
          caretColor: "black",
          zIndex: 10,
          mb: 3,
          "& textarea::placeholder": {
            color: "grey",
          },
        }}
      />
      {value && (
        <Typography
          sx={{
            width: "100%",
            overflowWrap: "break-word",
            fontSize: "20px",
            position: "absolute",
            // border: "1px solid black",
            top: 0,
            left: 0,
            mb: 3,
          }}
        >
          <span>{value.length <= 140 ? value : value.slice(0, 140)}</span>
          <span style={{ backgroundColor: "lightcoral" }}>
            {value.length > 140 ? value.slice(140) : null}
          </span>
        </Typography>
      )}
      <Box
        sx={{
          mt: 3,
          mb: 3,
        }}
      >
        <ReplyAudienceSelectPopover />
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          borderTop: "1px solid rgb(225,225,225) ",
          pt: 2,
          pb: 2,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          sx={{ width: "50%", p: 0, m: 0 }}
        >
          <AttachTweetImgPopover setNewTweetImgUrl={setNewTweetImgUrl} />
          {tweetFeatureIcons.map((icon) => (
            <IconButton
              key={icon.label}
              sx={{
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon.icon}
            </IconButton>
          ))}
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ gap: 2 }}
        >
          {value && <CircularStatic inputLength={value.length} />}
          <Button
            disabled={value.length > 140 || value.length === 0}
            sx={{
              bgcolor: "primary.main",
              color: "white",
              borderRadius: 10,
              fontSize: "12px",
              "&:hover": {
                bgcolor: "primary.dark",
              },
              "&:disabled": {
                bgcolor: "lightgrey",
                color: "grey",
              },
            }}
            onClick={handleSendingTweet}
          >
            Tweet
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default TweetInput;
