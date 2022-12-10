import * as React from "react";
import {
  InputOutlined,
  Pattern,
  MoreVert,
  ExpandMore,
  Favorite,
  Share,
  Mail,
  KeyboardArrowDown,
  ArrowRight,
  Home,
  Settings,
  People,
  PermMedia,
  Dns,
  Public,
  ExpandLess,
} from "@mui/icons-material";
// import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
// import PatternIcon from "@mui/icons-material/Pattern";
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
import styled from "styled-components";
import SideNavBar from "./SideNavBar";
import SearchAppBar from "./SearchBar";
import TweetEditing from "./TweetEditing";

const App = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Grid
        container
        spcing={1}
        sx={{
          maxWidth: "1080px",
          minWidth: "500px",
          height: "100%",
          margin: "0 auto",
        }}
      >
        <Grid item xs sm md sx={{ border: "1px solid red" }}>
          <SideNavBar />
        </Grid>
        <Grid item xs={10} sm={10} md={5.5} sx={{ border: "1px solid green" }}>
          <TweetEditing />
        </Grid>
        <Grid
          item
          md={3.5}
          sx={{
            border: "1px solid yellow",
            display: {
              xs: "none",
              sm: "none",
              md: "block",
            },
          }}
        >
          <SearchAppBar />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
