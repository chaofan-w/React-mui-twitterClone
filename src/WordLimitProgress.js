import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        width: "30px",
        height: "30px",
        alignItems: "center",
        justifyContent: "center",
        // border: "1px solid red",
        "& svg": {
          color: props.inputLength <= 140 ? "primary.main" : "lightcoral",
          transform: "translateY(20%)",
        },
      }}
    >
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {/* {`${140 - Math.round((props.value * 140) / 100)}`} */}
          {`${140 - props.inputLength}`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic({ inputLength }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setProgress(() =>
      inputLength >= 140 ? 100 : Math.round((inputLength / 140) * 100)
    );
    return () => {
      setProgress(0);
    };
  }, [inputLength]);

  return (
    <CircularProgressWithLabel value={progress} inputLength={inputLength} />
  );
}
