import React from "react";
import styled from "styled-components";
import Particle from "./Particle";

const ConfettiPiece = ({ angle, distance, size, color, delay }) => {
  return (
    <CenteredInsideParent>
      <Particle angle={angle} distance={distance} delay={delay}>
        <Confetti size={size} color={color} />
      </Particle>
    </CenteredInsideParent>
  );
};

export default ConfettiPiece;

const Confetti = styled.div`
  border-radius: 50%;
  background-color: ${(prop) => prop.color};
  width: ${(prop) => prop.size}px;
  height: ${(prop) => prop.size}px;
`;

const CenteredInsideParent = styled.div`
  position: absolute;
  top: 10px;
  left: 30px;
  transform: translate(-50%, -50%);
`;
