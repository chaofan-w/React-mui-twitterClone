import * as React from "react";
import PropTypes from "prop-types";
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
  Dialog,
  DialogTitle,
  Popover,
  ListItemSecondaryAction,
} from "@mui/material";
import styled from "styled-components";
import {
  MoreHorizRounded,
  HowToRegOutlined,
  ScreenShare,
} from "@mui/icons-material";
import { lightBlue } from "@mui/material/colors";

const whotofollowData = [
  {
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1509608409359859725/OMulWdJL_200x200.jpg",
    userName: "OKX",
    twitterName: "@okx",
    isOfficial: true,
    isPromoted: true,
    twitterLink: "https://twitter.com/okx",
  },
  {
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1542845985226952704/X9AxWhKo_200x200.jpg",
    userName: "Bain & Company",
    twitterName: "@BainAlerts",
    isOfficial: true,
    isPromoted: false,
    twitterLink: "https://twitter.com/BainAlerts",
  },
  {
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1542609096595185665/MW0sCv8e_200x200.png",
    userName: "McKinsey & Company",
    twitterName: "@McKinsey",
    isOfficial: true,
    isPromoted: false,
    twitterLink: "https://twitter.com/McKinsey",
  },
  {
    avatarUrl:
      "https://pbs.twimg.com/profile_images/565498192171507712/r2Hb2gvX_200x200.png",
    userName: "World Economic Forum",
    twitterName: "@wef",
    isOfficial: true,
    isPromoted: true,
    twitterLink: "https://twitter.com/wef",
  },
  {
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1539799565016379392/2h4jury3_200x200.png",
    userName: "Deloitte",
    twitterName: "@Deloitte",
    isOfficial: true,
    isPromoted: false,
    twitterLink: "https://twitter.com/Deloitte",
  },
  {
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1249778961229516806/8v45jDln_200x200.png",
    userName: "Harvard Business Review",
    twitterName: "@HarvardBiz",
    isOfficial: true,
    isPromoted: true,
    twitterLink: "https://twitter.com/HarvardBiz",
  },
];

const Img = styled.img(({ theme }) => ({
  width: "36px",
  height: "36px",
  objectFit: "cover",
  display: "block",
  margin: 0,
  borderRadius: "50%",
}));

const WhotoFollow = () => {
  const [follow, setFollow] = React.useState(false);
  const [value, setValue] = React.useState("Follow");
  return (
    <Box component="div" sx={{ width: "100%" }}>
      <List disablePadding>
        <ListItem>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography variant="h6" fontWeight="medium">
                  Who to follow
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        {whotofollowData.slice(0, 3).map((item) => (
          <ListItem
            disablePadding
            key={item.userName}
            sx={{ position: "relative" }}
          >
            <ListItemButton
              sx={{
                width: "100%",
                height: "fit-content",
                maxHeight: 96,
                // border: "1px solid blue",
                position: "relative",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={3}
              >
                <Img src={item.avatarUrl} alt={item.userName} />
                <ListItemText
                  secondary={
                    <>
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="subtitle2"
                          color="text.primary"
                        >
                          {item.userName}
                        </Typography>
                        <Typography></Typography>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="caption"
                          color="text.primary"
                        >
                          {item.twitterName}
                        </Typography>
                        <Typography></Typography>
                        {item.isOfficial && (
                          <React.Fragment>
                            <Stack
                              direction="row"
                              alignItems="center"
                              sx={{ mt: 1 }}
                            >
                              <HowToRegOutlined sx={{ fontSize: "14px" }} />
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="caption"
                                color="text.primary"
                              >
                                Official
                              </Typography>
                            </Stack>
                            <Typography></Typography>
                          </React.Fragment>
                        )}
                        {item.isPromoted && (
                          <React.Fragment>
                            <Stack direction="row" alignItems="center">
                              <ScreenShare sx={{ fontSize: "14px" }} />
                              <Typography
                                sx={{ display: "inline" }}
                                component="span"
                                variant="caption"
                                color="text.primary"
                              >
                                Promoted
                              </Typography>
                            </Stack>
                          </React.Fragment>
                        )}
                      </React.Fragment>
                    </>
                  }
                />
              </Stack>
            </ListItemButton>
            <ButtonBase
              sx={{
                width: 56,
                height: 25,
                borderRadius: "13px",
                fontSize: "12px",
                fontWeight: "600",
                color: "white",
                lineHeight: 25,
                textAlign: "center",
                bgcolor: "black",
                position: "absolute",
                right: 10,
                top: 10,
              }}
            >
              Follow
            </ButtonBase>
          </ListItem>
        ))}
        <ListItem>
          <ListItemButton>
            <ListItemText primary="Show More" sx={{ color: "primary.main" }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default WhotoFollow;
