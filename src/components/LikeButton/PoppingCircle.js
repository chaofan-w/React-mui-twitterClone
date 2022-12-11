import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color, children, duration }) => {
  return (
    <Circle size={size} color={color} duration={duration}>
      {children}
    </Circle>
  );
};

export default PoppingCircle;

const scale = keyframes`
  from {
    /* color: inherit; */
    transform: scale(0);
  }
  to {
    /* color: blue; */
    transform: scale(1);
  }
`;
const fade = keyframes`
  from {

    opacity:0.3;
  }
  to {

    opacity:0;
  }
`;

const Circle = styled.div`
  width: ${(prop) => prop.size}px;
  height: ${(prop) => prop.size}px;
  background-color: ${(prop) => prop.color};
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${scale} ${(prop) => prop.duration}ms linear forwards,
    ${fade} ${(prop) => prop.duration + 100}ms linear forwards;
`;
