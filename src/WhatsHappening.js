import * as React from "react";
import {
  Box,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  ButtonBase,
  Popover,
  List,
} from "@mui/material";
import styled from "styled-components";
import {
  MoreHorizRounded,
  SentimentVeryDissatisfied,
} from "@mui/icons-material";
const whatshappeningData = [
  {
    category: "Trending in Canada",
    tag: "Heartbreaking",
    views: 35800,
    searchLink: "",
    imgUrl:
      "https://pbs.twimg.com/semantic_core_img/1349406803889569793/PP9NKo4G?format=jpg&name=240x240",
  },
  {
    category: "Trending in Canada",
    tag: "Heartbreaking",
    views: 35800,
    searchLink: "",
    imgUrl: "",
  },
  {
    category: "Entertainment · Trending",
    tag: "Pete Davidson",
    views: 14700,
    searchLink: "",
    imgUrl: "",
  },
  {
    category: "Trending in Canada",
    tag: "Bakhmut",
    views: 28100,
    searchLink: "",
    imgUrl: "",
  },
  {
    category: "Trending",
    tag: "Prince Andrew",
    views: 21900,
    searchLink: "",
    imgUrl: "",
  },
  {
    category: "Politics · Trending",
    tag: "Donald Trump",
    views: 188000,
    searchLink: "",
    imgUrl: "",
  },
  {
    category: "Music · Trending",
    tag: "Diana Ross",
    views: 14500,
    searchLink: "",
    imgUrl: "",
  },
  {
    category: "Business & finance · Trending",
    tag: "$MMTLP",
    views: 43600,
    searchLink: "",
    imgUrl: "",
  },
];

const Img = styled.img(({ theme }) => ({
  width: "60px",
  height: "60px",
  objectFit: "cover",
  display: "block",
  margin: 0,
  borderRadius: 10,
  position: "absolute",
  top: 1,
  right: 0,
}));

const WhatsHappening = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box component="div" sx={{ width: "100%" }}>
      <List sx={{ width: "100%" }}>
        <ListItem
          sx={{
            width: "100%",
            // border: "1px solid red",
            p: 1,
          }}
        >
          <Box>
            <React.Fragment>
              <Typography variant="h6" fontWeight="medium">
                What's hapening
              </Typography>
            </React.Fragment>
          </Box>
        </ListItem>
        {whatshappeningData.slice(0, 4).map((item, index) => (
          <ListItem
            key={index}
            sx={{
              position: "relative",
              width: "100%",
              p: 1,
            }}
          >
            <ListItemButton
              // disablePadding
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: 64,
                // border: "1px solid blue",
                position: "relative",
              }}
            >
              <Box sx={{ width: "100%", ml: -3 }}>
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="caption"
                    color="text.primary"
                  >
                    {item.category}
                  </Typography>
                  <Typography></Typography>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="subtitle2"
                    color="text.primary"
                  >
                    {item.tag}
                  </Typography>
                  <Typography></Typography>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="caption"
                    color="text.primary"
                  >
                    {item.views > 1000
                      ? `${parseFloat(item.views / 1000).toFixed(1)}K Tweets`
                      : `${item.views} Tweets`}
                  </Typography>
                </React.Fragment>
              </Box>

              {item.imgUrl ? (
                <Img src={item.imgUrl} alt={item.tag} />
              ) : (
                <ButtonBase
                  onClick={handleClickOpen}
                  sx={{
                    width: 25,
                    height: 25,
                    borderRadius: "50%",
                    position: "absolute",
                    top: 0,
                    right: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    "&:hover": {
                      bgcolor: "myLightBlue.main",
                      "& svg": {
                        color: "myLightBlue.dark",
                      },
                    },
                  }}
                >
                  <ListItemIcon sx={{ alignItems: "flex-start" }}>
                    <MoreHorizRounded />
                  </ListItemIcon>
                </ButtonBase>
              )}
            </ListItemButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              sx={{
                "& .MuiPaper-root": {
                  padding: 0,
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                },
              }}
            >
              <List
                disablePadding
                sx={{
                  width: 360,
                  maxHeight: 128,
                }}
              >
                <ListItem sx={{ maxHeight: 48 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <SentimentVeryDissatisfied />
                    </ListItemIcon>
                    <ListItemText primary="not interested in this" />
                  </ListItemButton>
                </ListItem>
                <ListItem sx={{ maxHeight: 48 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <SentimentVeryDissatisfied />
                    </ListItemIcon>
                    <ListItemText primary="this trend is harmful or spammy" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Popover>
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

export default WhatsHappening;
