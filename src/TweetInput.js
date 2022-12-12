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
        border: "1px solid red",
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
          console.log(input.length);
          setValue(input.length <= 280 ? input : input.slice(0, 280));
        }}
        value={value}
        placeholder="What's happening?"
        fullWidth
        multiline
        rowsMax="3"
        sx={{
          fontSize: "20px",

          maxWidth: "100%",
        }}
      />
    </Box>
  );
};

export default TweetInput;
