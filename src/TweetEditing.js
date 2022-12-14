import * as React from "react";
//customize mui components from classes
import BadgeUnstyled, { badgeUnstyledClasses } from "@mui/base/BadgeUnstyled";
import { blue, grey } from "@mui/material/colors";
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
} from "@mui/icons-material";

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
} from "@mui/material";
import styled from "styled-components";
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
        <TweetPost tweet={tweet} />
      </Paper>
    </Box>
  );
};

export default TweetEditing;
