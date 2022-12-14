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
import zIndex from "@mui/material/styles/zIndex";

const whotofollowData = [
  {
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1509608409359859725/OMulWdJL_200x200.jpg",
    userName: "OKX",
    twitterName: "@okx",
    isOfficial: true,
    isPromoted: true,
    twitterLink: "https://twitter.com/okx",
    isFollowing: true,
  },
  {
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1542845985226952704/X9AxWhKo_200x200.jpg",
    userName: "Bain & Company",
    twitterName: "@BainAlerts",
    isOfficial: true,
    isPromoted: false,
    twitterLink: "https://twitter.com/BainAlerts",
    isFollowing: false,
  },
  {
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1542609096595185665/MW0sCv8e_200x200.png",
    userName: "McKinsey & Company",
    twitterName: "@McKinsey",
    isOfficial: true,
    isPromoted: false,
    twitterLink: "https://twitter.com/McKinsey",
    isFollowing: false,
  },
  {
    avatarUrl:
      "https://pbs.twimg.com/profile_images/565498192171507712/r2Hb2gvX_200x200.png",
    userName: "World Economic Forum",
    twitterName: "@wef",
    isOfficial: true,
    isPromoted: true,
    twitterLink: "https://twitter.com/wef",
    isFollowing: true,
  },
  {
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1539799565016379392/2h4jury3_200x200.png",
    userName: "Deloitte",
    twitterName: "@Deloitte",
    isOfficial: true,
    isPromoted: false,
    twitterLink: "https://twitter.com/Deloitte",
    isFollowing: false,
  },
  {
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1249778961229516806/8v45jDln_200x200.png",
    userName: "Harvard Business Review",
    twitterName: "@HarvardBiz",
    isOfficial: true,
    isPromoted: true,
    twitterLink: "https://twitter.com/HarvardBiz",
    isFollowing: false,
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
  const [followAccounts, setFollowAccounts] = React.useState(whotofollowData);

  React.useEffect(() => {
    let ignore = false;
    if (!ignore) {
      setFollowAccounts(whotofollowData);
    }
    return () => {
      ignore = true;
    };
  }, []);

  // console.log(followAccounts);

  return (
    <Box component="div" sx={{ width: "100%" }}>
      <List sx={{ width: "100%" }}>
        {/* <ListItem>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography variant="h6" fontWeight="medium">
                  Who to follow
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem> */}
        <Box sx={{ p: 1 }}>
          <Typography variant="h6" fontWeight="medium">
            Who to follow
          </Typography>
        </Box>
        {followAccounts &&
          followAccounts.slice(0, 3).map((item, index) => (
            <ListItem
              disablePadding
              key={item.twitterName}
              sx={{ position: "relative", width: "100%", maxHeight: 108 }}
            >
              <ListItemButton
                onClick={(e) => {
                  e.stopPropagation();
                }}
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
                  sx={{ ml: -3 }}
                >
                  <Img src={item.avatarUrl} alt={item.userName} />
                  <Box>
                    <>
                      <React.Fragment>
                        <Typography
                          sx={{
                            display: "inline",
                            ml: 0,
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                          component="span"
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
                  </Box>
                </Stack>
              </ListItemButton>
              <Box
                component="button"
                key={item.twitterName}
                id={item.twitterName}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  console.log(e.target);
                  let nextState = [...followAccounts];
                  console.log(nextState);
                  nextState.forEach((item, index) => {
                    if (item.twitterName === e.target.id) {
                      item.isFollowing = !item.isFollowing;
                      console.log(item);
                    }
                  });
                  setFollowAccounts(nextState);
                }}
                // onClick={(e) => console.log(e.target.id)}
                sx={{
                  // border: "1px solid red",
                  minWidth: 56,
                  width: "fit-content",
                  // p: 3,
                  maxHeight: 25,
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
                  zIndex: 10,
                  cursor: "pointer",
                  display: "flex",
                  // flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {item.isFollowing ? "Following" : "Follow"}
              </Box>
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
