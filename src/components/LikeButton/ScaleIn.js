import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
const ScaleIn = ({ children }) => {
  const n = useRef(1);
  const styles = useSpring({
    // to control the times of animation loop through useRef
    // loop: () => 2 > n.current++,
    // transform: "scale(1)",
    from: {
      transform: "scale(0)",
    },
    to: {
      transform: "scale(1)",
    },
    config: {
      // tension: 200,
      // friction: 12,
      mass: 2.1,
      tension: 250,
      friction: 15,
      precision: 0.014,
    },
  });

  return (
    <div style={{ zIndex: 10 }}>
      <animated.div style={styles}>{children}</animated.div>
    </div>
  );
};

export default ScaleIn;
