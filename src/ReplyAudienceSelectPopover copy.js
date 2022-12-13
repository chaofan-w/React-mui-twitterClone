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
  AlternateEmailOutlined,
} from "@mui/icons-material";
import styled from "styled-components";

const replyAudienceIcons = [
  {
    icon: <Public sx={{ fontSize: "14px" }} />,
    reply: "Everyone",
  },
  {
    icon: <SupervisedUserCircle sx={{ fontSize: "14px" }} />,
    reply: "Only people you follow",
  },
  {
    icon: <AlternateEmailOutlined sx={{ fontSize: "14px" }} />,
    reply: "Only people you mention",
  },
];

const ReplyAudienceSelectPopover = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [replyAudience, setReplyAudience] = React.useState("Everyone");

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openReplyAudience = Boolean(anchorEl);
  const id = openReplyAudience ? "simple-popover-replyAudience" : undefined;
  return (
    <Stack direciton="column" alignItems="flex-start">
      <Box>
        <Box
          component="button"
          aria-describedby={id}
          variant="outlined"
          onClick={handleClick}
          sx={{
            fontize: "14px",
            fontWeight: "500",
            color: "primary.main",
            bgcolor: "transparent",
            border: "none",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {replyAudience && (
            <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {
                replyAudienceIcons.filter((icon) => {
                  return icon.reply === replyAudience;
                })[0].icon
              }
              {replyAudience + " can reply"}
            </Typography>
          )}
          <KeyboardArrowDown sx={{ fontSize: "14px" }} />
        </Box>
        <Popover
          disablePadding
          id={id}
          open={openReplyAudience}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          sx={{
            maxWidth: 540,
            p: 1,
          }}
        >
          <List disablePadding>
            <ListItem>
              <ListItemText
                primary="Who can reply?"
                secondary="Choose who can reply to this Tweet. Anyone mentioned can always reply."
              />
            </ListItem>
            <ListItem disablePadding key="everyone">
              <ListItemButton
                disablePadding
                sx={{
                  width: "360px",
                  height: "48px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                onClick={() => {
                  setReplyAudience("Everyone");
                  handleClose();
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Public
                    sx={{ fontSize: "24px", color: "primary.main", m: 0 }}
                  />
                  <Typography sx={{ fontSize: "20px", p: 0, m: 0 }}>
                    Everyone
                  </Typography>
                </Stack>
                {replyAudience === "Everyone" ? (
                  <Check sx={{ color: "primary.main" }} />
                ) : null}
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding key="follow">
              <ListItemButton
                disablePadding
                sx={{
                  width: "360px",
                  height: "48px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                onClick={() => {
                  setReplyAudience("Only people you follow");
                  handleClose();
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <SupervisedUserCircle
                    sx={{ fontSize: "24px", color: "green", m: 0 }}
                  />
                  <Typography sx={{ fontSize: "20px", p: 0, m: 0 }}>
                    Only People you follow
                  </Typography>
                </Stack>
                {replyAudience === "Only people you follow" ? (
                  <Check sx={{ color: "green" }} />
                ) : null}
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding key="mention">
              <ListItemButton
                disablePadding
                sx={{
                  width: "360px",
                  height: "48px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                onClick={() => {
                  setReplyAudience("Only people you mention");
                  handleClose();
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <AlternateEmailOutlined
                    sx={{ fontSize: "24px", color: "violet", m: 0 }}
                  />
                  <Typography sx={{ fontSize: "20px", p: 0, m: 0 }}>
                    Only people you mention
                  </Typography>
                </Stack>
                {replyAudience === "Only people you mention" ? (
                  <Check sx={{ color: "violet" }} />
                ) : null}
              </ListItemButton>
            </ListItem>
          </List>
        </Popover>
      </Box>
    </Stack>
  );
};

export default ReplyAudienceSelectPopover;
