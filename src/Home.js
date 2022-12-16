import * as React from "react";

// import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
// import PatternIcon from "@mui/icons-material/Pattern";
import styled from "styled-components";
import SideNavBar from "./SideNavBar";
import SearchAppBar from "./SearchBar";
import TweetEditing from "./TweetEditing";
import WhatsHappening from "./WhatsHappening";
import WhotoFollow from "./WhotoFollow";
import SendTweet from "./SendTweet";
import HomeStickyBanner from "./HomeStickyBanner";
import TweetPostsContext from "./TweetPostsContext";
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
} from "@mui/material";

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
    <Box>
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
