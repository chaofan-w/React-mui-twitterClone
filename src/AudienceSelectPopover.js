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

const AudienceSelectPopover = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [audience, setAudience] = React.useState("Everyone");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
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
            color: audience === "Everyone" ? "primary.main" : "green",
            bgcolor: "transparent",
            border: "1px solid rgb(225,225,225)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {audience}
          <KeyboardArrowDown sx={{ fontSize: "14px" }} />
        </Box>
        <Popover
          disablePadding
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          sx={{
            width: 300,
            p: 1,
          }}
        >
          <List disablePadding>
            <ListItem>
              <ListItemText primary="Choose Audience" />
            </ListItem>
            <ListItem disablePadding key="everyone">
              <ListItemButton
                disablePadding
                sx={{
                  width: "240px",
                  height: "48px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                onClick={() => setAudience("Everyone")}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Public
                    sx={{ fontSize: "24px", color: "primary.main", m: 0 }}
                  />
                  <Typography sx={{ fontSize: "20px", p: 0, m: 0 }}>
                    Everyone
                  </Typography>
                </Stack>
                {audience === "Everyone" ? (
                  <Check sx={{ color: "primary.main" }} />
                ) : null}
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding key="circle">
              <ListItemButton
                disablePadding
                sx={{
                  width: "240px",
                  height: "48px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                onClick={() => setAudience("Twitter Circle")}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <SupervisedUserCircle
                    sx={{ fontSize: "24px", color: "green", m: 0 }}
                  />
                  <Typography sx={{ fontSize: "20px", p: 0, m: 0 }}>
                    Twitter Circle
                  </Typography>
                </Stack>
                {audience === "Twitter Circle" ? (
                  <Check sx={{ color: "green" }} />
                ) : null}
              </ListItemButton>
            </ListItem>
          </List>
        </Popover>
      </Box>
    </Stack>
  );
};

export default AudienceSelectPopover;
