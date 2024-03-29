import * as React from "react";
import moment from "moment";
// import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
// import PatternIcon from "@mui/icons-material/Pattern";
import TweetPostsContext from "./TweetPostsContext";
import FollowedByBar from "./FollowdByBar";
import {
  Box,
  Button,
  Typography,
  Stack,
  IconButton,
  Avatar,
  ButtonBase,
} from "@mui/material";
import {
  MoreHorizRounded,
  MailOutlined,
  CalendarMonthOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import TweetUserContext from "./TweetUserContext";

const ProfileTopBanner = ({ user }) => {
  const { loginUserName } = React.useContext(TweetPostsContext);
  const { tweetUserState, tweetUserDispatch } =
    React.useContext(TweetUserContext);
  // const selectedUser = tweetUserState.filter(
  //   (item) => item["userScreenName"] === user
  // )[0];

  const {
    userId,
    userName,
    userScreenName,
    profileImgUrl,
    userLocation,
    userStartDate,
    userDescription,
    profileBkgImgUrl,
    userFollowingAccounts,
    userFollowedByAccounts,
  } = tweetUserState.filter((u) => u["userScreenName"] === user)[0];

  // console.log(userFollowingAccounts);

  const startDate = moment.unix(userStartDate).format("MMMM YYYY");

  const handleFollowUser = (e) => {
    e.preventDefault();
    const loginUser = loginUserName;
    // console.log(loginUser);
    const followUser = user;
    // const loginUserInfo = tweetUserState.filter(
    //   (u) => u["userScreenName"] === loginUser
    // )[0];
    // console.log(loginUserInfo);
    if (
      tweetUserState.filter((u) => u["userScreenName"] === loginUser)[0][
        "userFollowingAccounts"
      ] &&
      tweetUserState
        .filter((u) => u["userScreenName"] === loginUser)[0]
        ["userFollowingAccounts"].includes(followUser)
    ) {
      tweetUserDispatch({
        type: "unfollowUser",
        userScreenName: followUser,
      });
    } else if (
      tweetUserState.filter((u) => u["userScreenName"] === loginUser)[0][
        "userFollowingAccounts"
      ] &&
      !tweetUserState
        .filter((u) => u["userScreenName"] === loginUser)[0]
        ["userFollowingAccounts"].includes(followUser)
    ) {
      tweetUserDispatch({
        type: "followUser",
        userScreenName: followUser,
      });
    }
  };
  return (
    <Box
      component="div"
      sx={{ width: "100%", display: "flex", flexDirection: "column" }}
    >
      <Box
        sx={{
          width: "100%",
          height: 300,
          mb: 3,
          position: "relative",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "100%",
            height: 240,
            backgroundImage: `url(${profileBkgImgUrl})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            p: 0,
          }}
        >
          <ButtonBase
            sx={{
              width: 120,
              height: 120,
              position: "absolute",
              left: 20,
              top: 180,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
            }}
          >
            <Avatar
              src={profileImgUrl}
              sx={{
                width: 120,
                height: 120,
              }}
            />
          </ButtonBase>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          spacing={4}
          sx={{
            width: "100%",
            height: 60,
            postion: "absolute",
            top: 240,
            left: 0,
            pr: 3,
          }}
        >
          <IconButton
            sx={{ border: "1px solid lightgrey", width: 30, height: 30 }}
          >
            <MoreHorizRounded />
          </IconButton>
          <IconButton
            sx={{ border: "1px solid lightgrey", width: 30, height: 30 }}
          >
            <MailOutlined sx={{ width: 20, height: 20 }} />
          </IconButton>
          {userScreenName !== loginUserName && (
            <Button
              sx={{
                minWidth: 56,
                width: "fit-content",
                maxHeight: 25,
                borderRadius: "13px",
                fontSize: "12px",
                fontWeight: "600",
                color: "white",
                lineHeight: 25,
                textAlign: "center",
                bgcolor: "black",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                "&:hover": {
                  bgcolor: "primary.main",
                },
              }}
              onClick={handleFollowUser}
            >
              {userFollowedByAccounts.includes(loginUserName)
                ? "Following"
                : "Follow"}
            </Button>
          )}
        </Stack>
      </Box>
      <Stack>
        <Typography fontWeight="900" sx={{ fontSize: "20px" }}>
          {userName}
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "grey" }}>
          {"@" + userScreenName}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "grey",
            lineHeight: 1.2,
            pt: 2,
            pb: 2,
          }}
        >
          {userDescription}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        spacing={4}
        sx={{ mb: 3 }}
      >
        {userLocation && (
          <Typography
            sx={{
              fontSize: "14px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <LocationOnOutlined sx={{ fontSize: "14px" }} />
            {userLocation}
          </Typography>
        )}
        <Typography
          sx={{
            fontSize: "14px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <CalendarMonthOutlined sx={{ fontSize: "14px" }} />
          {"Joined " + startDate}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        spacing={4}
        sx={{ mb: 3 }}
      >
        <Typography sx={{ fontSize: "14px" }}>
          <Typography
            component="span"
            sx={{ fontSize: "14px", fontWeight: "600", mr: 2 }}
          >
            {userFollowingAccounts.length}
          </Typography>
          Following
        </Typography>
        <Typography sx={{ fontSize: "14px" }}>
          <Typography
            component="span"
            sx={{ fontSize: "14px", fontWeight: "600", mr: 2 }}
          >
            {userFollowedByAccounts.length}
          </Typography>
          Followers
        </Typography>
      </Stack>
      {user !== loginUserName && (
        <Stack>
          <FollowedByBar user={user} />
        </Stack>
      )}
    </Box>
  );
};

export default ProfileTopBanner;
