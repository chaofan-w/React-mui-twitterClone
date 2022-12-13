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
  Input,
  InputBase,
} from "@mui/material";

import {
  AutoAwesome,
  Public,
  SupervisedUserCircle,
  KeyboardArrowDown,
  Check,
  PhotoOutlined,
  GifBoxOutlined,
  BallotOutlined,
  SentimentSatisfiedOutlined,
  CalendarMonthOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import ReplyAudienceSelectPopover from "./ReplyAudienceSelectPopover copy";

const tweetFeatureIcons = [
  {
    icon: (
      <PhotoOutlined
        sx={{ width: "20px", height: "20px", color: "primary.main" }}
      />
    ),
    label: "insertPhoto",
  },
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
          let input = e.target.value;
          setValue(e.target.value);
        }}
        value={value}
        placeholder="What's happening?"
        fullWidth
        multiline
        rowsMax="3"
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
          {tweetFeatureIcons.map((icon) => (
            <IconButton
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
        <Stack>
          <Button
            sx={{
              bgcolor: "primary.main",
              color: "white",
              borderRadius: 10,
              fontSize: "12px",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            Tweet
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default TweetInput;
