import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";

const Particle = ({ children, angle, distance, delay }) => {
  const convertDegreeToRadius = (angle) => {
    return (angle * Math.PI) / 180;
  };
  const angleInRads = convertDegreeToRadius(angle);
  const x = Math.cos(angleInRads) * distance;
  const y = Math.sin(angleInRads) * distance;
  // const n = useRef(1);
  const styles = useSpring({
    // loop: () => 2 > n.current++,
    delay: delay,
    position: "absolute",
    top: 0,
    left: 0,
    from: { x: 0, y: 0, opacity: 1 },
    to: { x: x, y: y, opacity: 0 },
    config: {
      duration: 500,
      mass: 1.2,
      tension: 195,
      friction: 9,
      precision: 0.001,
      velocity: 0.001,
    },
  });

  return (
    <div>
      <animated.div style={styles}>{children}</animated.div>
    </div>
  );
};

export default Particle;
