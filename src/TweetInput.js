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
} from "@mui/icons-material";
import styled from "styled-components";

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
          fontSize: "20px",
          maxWidth: "100%",
          color: "transparent",
          zIndex: 10,
          "& textarea::placeholder": {
            color: "grey",
          },
        }}
      />
      {value && (
        <Typography
          sx={{
            width: "100%",
            maxWidth: 480,
            overflowWrap: "break-word",
            fontSize: "20px",
            position: "absolute",
            border: "1px solid black",
            top: 3,
          }}
        >
          <span>{value.length <= 140 ? value : value.slice(0, 140)}</span>
          <span style={{ color: "red" }}>
            {value.length > 140 ? value.slice(140) : null}
          </span>
        </Typography>
      )}
    </Box>
  );
};

export default TweetInput;
