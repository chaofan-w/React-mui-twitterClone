import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Divider,
  Paper,
  Stack,
  IconButton,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Badge,
  List,
  ListItem,
  ListButton,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Tooltip,
  ListSubheader,
  Grid,
  ButtonBase,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Popover,
} from "@mui/material";

import {
  AutoAwesome,
  Public,
  SupervisedUserCircle,
  KeyboardArrowDown,
  Check,
} from "@mui/icons-material";
import styled from "styled-components";
import AudienceSelectPopover from "./AudienceSelectPopover";
import TweetInput from "./TweetInput";
import TweetPostsContext from "./TweetPostsContext";

const SendTweet = () => {
  const { tweetState, loginUserName } = React.useContext(TweetPostsContext);
  const profileImg = tweetState.filter(
    (user) => user["userScreenName"] === loginUserName
  )[0]["profileImgUrl"];
  return (
    <Box
      sx={{
        maxWidth: "100%",
        // border: "1px solid green"
      }}
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: 0,
          borderLeft: "1px solid rgb(225,225,225) ",
          borderRight: "1px solid rgb(225,225,225) ",
          borderBottom: "1px solid rgb(225,225,225) ",
        }}
      >
        <Stack
          direction="row"
          alignItems="flex-start"
          justifyContent="flex-start"
          spacing={3}
          sx={{ pl: 3, pr: 3, pb: 0 }}
        >
          <IconButton
            sx={{
              width: 48,
              height: 48,
            }}
          >
            <Avatar
              src={profileImg}
              alt={loginUserName}
              sx={{
                width: 48,
                height: 48,
              }}
            />
          </IconButton>
          <Stack
            sx={{
              maxWidth: "100%",
              width: "100%",
              // border: "1px solid blueviolet",
            }}
            direction="column"
            alignItems="flex-start"
            spacing={3}
          >
            <AudienceSelectPopover />
            <TweetInput />
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default SendTweet;
