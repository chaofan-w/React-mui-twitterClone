import styled from "styled-components";

import Header from "./Header";
import ActionBar from "./ActionBar";
import { useContext } from "react";
// import TweetContext from "../../TweetContext";
import TweetPostsContext from "../../TweetPostsContext";
import moment from "moment";
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
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Tooltip,
  ListSubheader,
  Grid,
  ButtonBase,
  SvgIcon,
  Link,
} from "@mui/material";
import {
  Home,
  Tag,
  NotificationsNone,
  MailOutline,
  BookmarkBorder,
  ListAlt,
  PersonOutline,
  MoreHorizRounded,
  HistoryEduOutlined,
  HowToRegOutlined,
} from "@mui/icons-material";
const Tweet = ({
  displayName,
  username,
  avatarSrc,
  tweetContents,
  timestamp,
  imgAttachment,
  tweet,
}) => {
  const { tweetState } = useContext(TweetPostsContext);
  const date = moment.unix(timestamp).format("h:mm a MMM Do");
  return (
    // <Wrapper>
    //   <Header
    //     displayName={displayName}
    //     username={username}
    //     avatarSrc={avatarSrc}
    //   />
    //   <TweetContents>{tweetContents}</TweetContents>
    //   <Timestamp>{date}</Timestamp>
    //   {/* <Divider /> */}

    //   {/* <ActionBar /> */}
    //   {/* <Divider /> */}
    // </Wrapper>
    <Box sx={{ width: "100%", p: 2 }}>
      <Stack
        direction="row"
        alignItems="flex-start"
        justifyContent="flex-start"
        spacing={3}
        sx={{ display: "flex" }}
      >
        <Avatar src={avatarSrc} sx={{ flex: "none" }} />
        <Stack
          direction="column"
          alignItems="flex-start"
          sx={{ flex: "auto", position: "relative" }}
          spacing={2}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ height: "30px" }}
          >
            <Stack
              sx={{
                color: "black",
              }}
              onClick={(e) => e.preventDefault()}
              direction="row"
              alignItems="center"
              spacing={2}
            >
              <Link
                href="#"
                underline="none"
                sx={{ color: "black", fontWeight: "600", fontSize: "14px" }}
              >
                {displayName}
              </Link>
              <HowToRegOutlined
                fontSize="small"
                sx={{ color: "primary.main" }}
              />
              <Link
                href="#"
                underline="none"
                sx={{ color: "grey", fontSize: "12px" }}
              >
                @{username}
              </Link>
              <Typography
                sx={{ fontFamily: "roboto condensed", fontSize: "12px" }}
              >
                {date}
              </Typography>
            </Stack>
            <IconButton
              sx={{
                width: "30px",
                height: "30px",
                position: "absolute",
                right: 0,
                top: 0,
              }}
            >
              <MoreHorizRounded />
            </IconButton>
          </Stack>
          <Stack direction="column" alignItems="flex-start">
            {imgAttachment && (
              <Box
                component="img"
                src={imgAttachment}
                alt={tweetContents.slice(0, 20)}
                sx={{ maxWidth: "100%", pb: 2 }}
              />
            )}
            <Typography variant="body2">{tweetContents}</Typography>
          </Stack>
          <Box>
            <ActionBar tweet={tweet} />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

// const Wrapper = styled.div`
//   background: transparent;
//   max-width: 580px;
//   padding: 16px;
//   text-align: left;
//   font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
//     Ubuntu, "Helvetica Neue", sans-serif;
// `;

// const TweetContents = styled.div`
//   font-size: 22px;
//   padding: 16px 0;
// `;

// const Timestamp = styled.div`
//   color: rgb(101, 119, 134);
//   font-size: 16px;
//   padding-bottom: 16px;
// `;

// const Divider = styled.div`
//   height: 1px;
//   background: rgb(230, 236, 240);
// `;

// const Stats = styled.div`
//   display: flex;
//   align-items: center;
//   height: 48px;
// `;

export default Tweet;
