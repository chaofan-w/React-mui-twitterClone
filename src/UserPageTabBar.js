import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ setKeyWord }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="user page tweet tabs"
          variant="fullWidth"
        >
          <Tab
            label="Tweets"
            {...a11yProps(0)}
            onClick={() => setKeyWord("tweets")}
          />
          <Tab
            label="Tweets & replies"
            {...a11yProps(1)}
            onClick={() => setKeyWord("tweetReplies")}
          />
          <Tab
            label="Media"
            {...a11yProps(2)}
            onClick={() => setKeyWord("media")}
          />
          <Tab
            label="Likes"
            {...a11yProps(3)}
            onClick={() => setKeyWord("likes")}
          />
        </Tabs>
      </Box>
    </Box>
  );
}
