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
} from "@mui/material";

import { AutoAwesome } from "@mui/icons-material";
import styled from "styled-components";

const HomeStickyBanner = ({ homeContent }) => {
  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          borderRadius: 0,
          width: "100%",
          background: "rgba(255, 255, 255, 0.54)",
          // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(9px)",
          borderLeft: "1px solid rgb(225,225,225) ",
          borderRight: "1px solid rgb(225,225,225) ",
        }}
      >
        {homeContent}
      </Paper>
    </Box>
  );
};

export default HomeStickyBanner;
