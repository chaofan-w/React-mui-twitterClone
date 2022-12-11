import React from "react";
import { useSpring, animated } from "react-spring";

const Rotate = ({ children, reverse }) => {
  const styles = useSpring({
    reverse: reverse,
    from: { rotate: 0 },
    to: { rotate: 360 },
  });

  return (
    <div>
      <animated.div
        style={{
          ...styles,
          padding: 0,
          margin: 0,
          transform: "rotate(180deg)",
          transformOrigin: "center",
        }}
      >
        {children}
      </animated.div>
    </div>
  );
};

export default Rotate;
