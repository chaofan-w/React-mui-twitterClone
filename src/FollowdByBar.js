import * as React from "react";
import { Link, useParams } from "react-router-dom";

// import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
// import PatternIcon from "@mui/icons-material/Pattern";
import styled from "styled-components";
import SideNavBar from "./SideNavBar";
import SearchAppBar from "./SearchBar";
import TweetEditing from "./TweetEditing";
import WhatsHappening from "./WhatsHappening";
import WhotoFollow from "./WhotoFollow";
import SendTweet from "./SendTweet";
import HomeStickyBanner from "./HomeStickyBanner";
import TweetPostsContext from "./TweetPostsContext";
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
import { AutoAwesome, ArrowBack } from "@mui/icons-material";
import ProfileTopBanner from "./ProfileTopBanner";
import TweetUserContext from "./TweetUserContext";

const FollowedByBar = ({ user }) => {
  const { tweetState, loginUserName, userData } =
    React.useContext(TweetPostsContext);
  const { tweetUserState } = React.useContext(TweetUserContext);

  // const loginUserData = tweetUserState.filter(
  //   (u) => u["userScreenName"] === loginUserName
  // )[0];

  const userFollowingAccounts = tweetUserState.filter(
    (u) => u["userScreenName"] === loginUserName
  )[0]["userFollowingAccounts"];
  // console.log(userFollowingAccounts);

  const followUserFollowedByAccounts = tweetUserState.filter(
    (u) => u["userScreenName"] === user
  )[0]["userFollowedByAccounts"];
  // console.log(followUserFollowedByAccounts);

  // const userInfo = tweetUserState.filter(
  //   (u) => u["userScreenName"] === user
  // )[0];
  // console.log(userInfo);
  // const userFollowedByAccounts = userInfo["userFollowedByAccounts"];
  // console.log(userFollowedByAccounts);

  // const FollowedByFollowingAccounts = user
  //   ? loginUserData["userFollowingAccounts"].filter((following) =>
  //       userFollowedByAccounts.includes(following)
  //     )
  //   : null;
  const FollowedByFollowingAccounts =
    userFollowingAccounts.length > 0
      ? userFollowingAccounts.filter((following) =>
          followUserFollowedByAccounts.includes(following)
        )
      : null;
  console.log(FollowedByFollowingAccounts);

  return (
    <Box sx={{ width: "100%", height: "fit-content", mb: 4 }}>
      <Stack
        direction="row"
        alignItems="flex-start"
        justifyContent="flex-start"
        sx={{ width: "100%", height: 30 }}
      >
        {FollowedByFollowingAccounts ? (
          <Stack
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Stack
              direciton="row"
              alignItems="center"
              justifyContent="center"
              spacing={3}
              sx={{
                width: 40,
                height: 30,
                position: "relative",
              }}
            >
              <Box
                component="button"
                sx={{
                  width: 40,
                  height: 20,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  border: "none",
                  bgcolor: "transparent",
                  cursor: "pointer",
                  // border: "1px solid blue",
                }}
              >
                {Array.from(
                  {
                    length:
                      FollowedByFollowingAccounts.length > 3
                        ? 3
                        : FollowedByFollowingAccounts.length,
                  },
                  (_, index) => index
                ).map((i) => (
                  <Avatar
                    key={"avatar_" + i}
                    src={
                      userData.filter(
                        (user) =>
                          user["userScreenName"] ===
                          FollowedByFollowingAccounts[i]
                      )[0]["profileImgUrl"]
                    }
                    sx={{
                      width: 20,
                      height: 20,
                      position: "absolute",
                      top: 0,
                      left: `${i * 8}px`,
                      zIndex: `${i * -10}`,
                    }}
                  />
                ))}
              </Box>
            </Stack>
            <Typography
              component="div"
              sx={{
                fontSize: "14px",
                width: 400,
                height: 30,
                lineHeight: "30px",
              }}
            >
              <Typography component="span" sx={{ fontSize: "10px" }}>
                Followed By{" "}
              </Typography>

              {FollowedByFollowingAccounts.length > 3 ? (
                // FollowedByFollowingAccounts.slice(0, 2).map((account) => (
                //     <Typography component="span">{account + ", "}</Typography>
                //   ))
                <>
                  <Typography component="span" sx={{ fontSize: "10px" }}>
                    {FollowedByFollowingAccounts.slice(0, 2).join(", ")}
                  </Typography>
                  <Typography component="span" sx={{ fontSize: "10px" }}>
                    {" and " +
                      (FollowedByFollowingAccounts.length - 3) +
                      " others you follow"}
                  </Typography>
                </>
              ) : (
                // FollowedByFollowingAccounts.map((account) => (
                //   <Typography component="span">{account}</Typography>
                // ))
                <>
                  <Typography component="span" sx={{ fontSize: "10px" }}>
                    {FollowedByFollowingAccounts.join(", ")}
                  </Typography>
                  <Typography component="span" sx={{ fontSize: "10px" }}>
                    {" you follow"}
                  </Typography>
                </>
              )}
            </Typography>
          </Stack>
        ) : (
          <Typography
            component="div"
            sx={{
              fontSize: "14px",
              width: 400,
              height: 30,
              lineHeight: "30px",
            }}
          >
            {"Not followed by anyone you’re following"}
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default FollowedByBar;
