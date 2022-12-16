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
import UserPageTabBar from "./UserPageTabBar";

const UserHomePage = () => {
  const { tweetState } = React.useContext(TweetPostsContext);
  let { userScreenName } = useParams();
  const [keyword, setKeyWord] = React.useState("tweets");
  // console.log(userScreenName);
  const homeContent = (
    <React.Fragment>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: "100%",
          height: 48,
          p: 3,
          bgcolor: "transparent",
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="flex-start">
          <Link to="/">
            <IconButton>
              <ArrowBack />
            </IconButton>
          </Link>
          <Stack
            component="button"
            direciton="column"
            alignItems="flex-start"
            sx={{
              bgcolor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Typography fontWeight="medium" sx={{ fontSize: "20px" }}>
              {tweetState &&
                tweetState.filter(
                  (tweet) => tweet["userScreenName"] === userScreenName
                )[0]["userName"]}
            </Typography>
            <Typography
              fontWeight="medium"
              sx={{ fontSize: "14px", color: "grey" }}
            >
              {tweetState.filter(
                (tweet) => tweet["userScreenName"] === userScreenName
              ).length + " Tweets"}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );

  return (
    <Box>
      <Box sx={{ position: "sticky", top: 0, zIndex: 200, maxWidth: "100%" }}>
        <HomeStickyBanner homeContent={homeContent} />
      </Box>
      <Box>
        <ProfileTopBanner user={userScreenName} />
      </Box>
      <Box>
        <UserPageTabBar setKeyWord={setKeyWord} />
      </Box>

      <Box>
        {/* https://medium.com/nerd-for-tech/a-case-to-switch-using-switch-statements-in-react-e83e01154f60
        use switch plus tab to realize the tab filter tweets feature        
        */}
        {(() => {
          switch (keyword) {
            case "tweets":
              return (
                <>
                  {tweetState
                    .filter(
                      (tweet) => tweet["userScreenName"] === userScreenName
                    )
                    .map((tweet) => (
                      <TweetEditing key={tweet["tweetId"]} tweet={tweet} />
                    ))}
                </>
              );

            case "tweetReplies":
              return (
                <>
                  {tweetState
                    .filter((tweet) =>
                      tweet["replyCount"].includes(userScreenName)
                    )
                    .map((tweet) => (
                      <TweetEditing key={tweet["tweetId"]} tweet={tweet} />
                    ))}
                </>
              );
            case "likes":
              return (
                <>
                  {tweetState
                    .filter((tweet) =>
                      tweet["favoriteCount"].includes(userScreenName)
                    )
                    .map((tweet) => (
                      <TweetEditing key={tweet["tweetId"]} tweet={tweet} />
                    ))}
                </>
              );
            case "media":
              return (
                <>
                  {tweetState
                    .filter(
                      (tweet) =>
                        tweet["userScreenName"] === userScreenName &&
                        tweet["imgAttachmentUrl"]
                    )
                    .map((tweet) => (
                      <TweetEditing key={tweet["tweetId"]} tweet={tweet} />
                    ))}
                </>
              );
          }
        })()}
      </Box>
    </Box>
  );
};

export default UserHomePage;
