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
  PhotoOutlined,
  AddLink,
} from "@mui/icons-material";
import styled from "styled-components";

const AttachTweetImgPopover = ({ setNewTweetImgUrl }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [link, setLink] = React.useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAttachImg = (e) => {
    e.preventDefault();
    setNewTweetImgUrl(link);
    setLink("");
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Stack direciton="column" alignItems="flex-start">
      <Box>
        <IconButton
          component="button"
          aria-describedby={id}
          variant="outlined"
          onClick={handleClick}
          sx={{ width: "30px", height: "30px" }}
        >
          <PhotoOutlined
            sx={{ width: "20px", height: "20px", color: "primary.main" }}
          />
        </IconButton>
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
            width: "100%",
            p: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            sx={{
              // "& > :not(style)": { m: 1 },
              width: "100%",
              height: "70px",
              display: "flex",
              flexDirection: "row",
              p: 2,
              border: "1px solid red",
            }}
            noValidate
            autoComplete="off"
          >
            <Stack
              direction="row"
              // alignItems="center"
              justifyContent="flex-start"
              sx={{ p: 0, width: "100%", height: "100%", position: "relative" }}
            >
              <TextField
                disablePadding
                id="outlined-basic"
                label="image url"
                variant="outlined"
                sx={{
                  fontSize: "14px",
                  height: "40px",
                  width: "90%",
                }}
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <IconButton
                variant="contained"
                onClick={handleAttachImg}
                sx={{
                  width: "30px",
                  height: "30px",
                  postion: "absolute",
                  top: 15,
                }}
              >
                <AddLink />
              </IconButton>
            </Stack>
          </Box>
        </Popover>
      </Box>
    </Stack>
  );
};

export default AttachTweetImgPopover;
