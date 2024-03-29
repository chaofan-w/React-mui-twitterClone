import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
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
  Stack,
  Avatar,
  Badge,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  ButtonBase,
} from "@mui/material";
import styled from "styled-components";
// https://betterprogramming.pub/react-best-way-of-importing-svg-the-how-and-why-f7c968272dd9
// how to import svgs in react
import twitterLogo from "./assets/Logo-blue.svg";
import crescendoLogo from "./assets/crescendo-logo.png";
import TweetPostsContext from "./TweetPostsContext";

const Img = styled.img({
  display: "block",
  maxWidth: "60%",
  maxHeight: "60%",
  margin: 0,
});

//customize mui components
//https://mui.com/base/react-badge/#slot-props
const StyledBadge = styled(BadgeUnstyled)(
  ({ theme }) => `
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-variant: tabular-nums;
    list-style: none;
    font-family: IBM Plex Sans, sans-serif;
    position: relative;
    display: inline-block;
    line-height: 1;
  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    position: absolute;
    top: 0;
    right: 0;
    min-width: 20px;
    width:20px;
    height: 20px;
    padding: 0;
    color: #fff;
    font-weight: 600;
    font-size: 11px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    border-radius: 50%;
    background: ${blue[500]};
    box-shadow: 0px 4px 8px ${
      theme.palette.mode === "dark" ? grey[900] : grey[300]
    };
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    
  }

`
);

const SideNavBar = () => {
  const { loginUserName } = React.useContext(TweetPostsContext);
  const sideBarItems = [
    {
      icon: (
        <Badge variant="dot" color="primary" overlap="circular">
          <Home sx={{ ml: -1.5, fontSize: 28 }} />
        </Badge>
      ),
      label: "Home",
      link: "/",
    },
    {
      icon: <Tag sx={{ ml: -1.5, fontSize: 28 }} />,
      label: "Explore",
      link: "",
    },
    {
      icon: (
        <StyledBadge
          variant="standard"
          color="primary"
          overlap="circular"
          badgeContent={111}
          max={99}
        >
          <NotificationsNone sx={{ ml: -1.5, fontSize: 28 }} />
        </StyledBadge>
      ),
      label: "Notifications",
      link: "",
    },
    {
      icon: <MailOutline sx={{ ml: -1.5, fontSize: 28 }} />,
      label: "Messages",
      link: "",
    },
    {
      icon: <BookmarkBorder sx={{ ml: -1.5, fontSize: 28 }} />,
      label: "Bookmarks",
      link: "",
    },
    {
      icon: <ListAlt sx={{ ml: -1.5, fontSize: 28 }} />,
      label: "Lists",
      link: "",
    },
    {
      icon: <PersonOutline sx={{ ml: -1.5, fontSize: 28 }} />,
      label: "Profile",
      link: `/profile/${loginUserName}`,
    },
    {
      icon: <MoreHorizRounded sx={{ ml: -1.5, fontSize: 28 }} />,
      label: "More",
      link: "",
    },
  ];

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        height: "80vh",
        minHeight: "680px",
        maxWidth: {
          xs: 64,
          sm: 96,
          md: 256,
        },
        mt: 0,
        mb: 0,
        ml: 0,
        mr: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: {
              xs: "center",
              sm: "center",
              md: "flex-start",
            },

            gap: 2,
          }}
        >
          <ListItem disablePadding sx={{ height: 48 }}>
            <ButtonBase
              sx={{
                maxHeight: "100%",
                maxWidth: "100%",
                height: 48,
                width: 48,
                borderRadius: "50%",
                margin: {
                  xs: "auto",
                  sm: "auto",
                  md: "auto 0",
                },
              }}
            >
              <Img src={twitterLogo} alt="twitter logo" />
            </ButtonBase>
          </ListItem>
          {sideBarItems.map((listItem, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                height: {
                  xs: 48,
                  sm: 48,
                  md: 48,
                },
                width: {
                  xs: 48,
                  sm: 48,
                  md: "auto",
                },
              }}
            >
              <RouterLink
                to={listItem.link ? listItem.link : null}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemButton
                  // disablePadding
                  sx={{
                    height: {
                      xs: 48,
                      sm: 48,
                      md: 48,
                    },
                    width: {
                      xs: 48,
                      sm: 48,
                      md: "auto",
                    },

                    borderRadius: {
                      xs: "50%",
                      sm: "50%",
                      md: 10,
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "secondary.dark" }}>
                    {listItem.icon}
                  </ListItemIcon>
                  <ListItemText
                    // disablePadding
                    primary={listItem.label}
                    sx={{
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "block",
                      },
                      ml: -5,
                    }}
                  />
                </ListItemButton>
              </RouterLink>
            </ListItem>
          ))}
        </List>
        <Box
          component="div"
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
            },
          }}
        >
          <Button
            varient="contained"
            sx={{
              width: {
                md: 200,
              },
              height: {
                md: 48,
              },
              mt: 5,

              borderRadius: 10,
              bgcolor: "primary.main",
              color: "white",
              textAlign: "center",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Tweet
          </Button>
        </Box>
        <Box
          // disablePadding
          component="div"
          sx={{
            width: {
              xs: 50,
              sm: 50,
            },
            height: {
              xs: 50,
              sm: 50,
            },
            display: {
              xs: "flex",
              sm: "flex",
              md: "none",
              lg: "none",
              xl: "none",
            },
            ml: "auto",
            mr: "auto",
            alignItems: {
              xs: "center",
              sm: "center",
            },
            justifyContent: {
              xs: "center",
              sm: "center",
            },
          }}
        >
          <ButtonBase
            // disablePadding
            varient="contained"
            sx={{
              width: {
                xs: 50,
                sm: 50,
              },

              height: {
                xs: 50,
                sm: 50,
              },
              borderRadius: "50%",
              bgcolor: "primary.main",
              color: "white",
              textAlign: "center",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
              display: {
                xs: "flex",
                sm: "flex",
                md: "none",
                lg: "none",
                xl: "none",
              },
              alignItems: {
                xs: "center",
                sm: "center",
              },
              justifyContent: {
                xs: "center",
                sm: "center",
              },
            }}
          >
            <HistoryEduOutlined sx={{ fontSize: "30px" }} />
          </ButtonBase>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          width: {
            md: 230,
          },
        }}
      >
        <ButtonBase
          varient="contained"
          sx={{
            width: {
              // xs: 48,
              // sm: 48,
              md: 230,
            },
            height: {
              // xs: 48,
              // sm: 48,
              md: 56,
            },
            // mt: 5,

            p: 2,
            borderRadius: 10,
            color: "secondary.dark",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: {
              md: "space-between",
              xs: "center",
              sm: "center",
            },
            "&:hover": {
              bgcolor: "#E7E7E7",
            },
          }}
        >
          <Stack direction="row" spacing={3}>
            <Avatar src={crescendoLogo} alt="twitter avatar" />
            <Stack
              direction="column"
              spacing={0}
              alignItems="flex-start"
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                },
              }}
            >
              <Typography fontWeight="medium">Crescendo Plus</Typography>
              <Typography fontSize="small" color="secondary.main">
                @Crescendo_plus
              </Typography>
            </Stack>
          </Stack>
          <ButtonBase
            disableRipple
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
          >
            <MoreHorizRounded />
          </ButtonBase>
        </ButtonBase>
      </Box>
    </Box>
  );
};

export default SideNavBar;
