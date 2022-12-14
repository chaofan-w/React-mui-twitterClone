import styled, { keyframes } from "styled-components";
import ScaleIn from "./ScaleIn";
import Heart from "./Heart";
import { useContext } from "react";
import TweetContext from "../../TweetContext";
import PoppingCircle from "./PoppingCircle";
import ConfettiPiece from "./ConfettiPiece";
import { range, sample, random } from "../utils";
import TweetPostsContext from "../../TweetPostsContext";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ size = 40, isLikedByCurrentUser }) => {
  const { tweetState, dispatch } = useContext(TweetPostsContext);
  // const isLikedByCurrentUser = tweetState.like;
  const heartSize = size * 0.6;

  return (
    <Wrapper style={{ width: size, height: size }}>
      {isLikedByCurrentUser ? (
        <ScaleIn>
          <Heart width={heartSize} isToggled={isLikedByCurrentUser} />
        </ScaleIn>
      ) : (
        <Heart width={heartSize} isToggled={isLikedByCurrentUser} />
      )}
      {isLikedByCurrentUser &&
        range(12).map((i) => (
          <ConfettiPiece
            key={i}
            angle={`${360 * (sample(range(36)) / 36)}`}
            distance={random(15, 20)}
            color={`${sample(PARTICLE_COLORS)}`}
            size={random(2, 10)}
            delay={i < 6 ? 0 : 300}
          />
        ))}
      {isLikedByCurrentUser && (
        <>
          <PoppingCircle size={size} color="magenta" duration={250} />
          <PoppingCircle size={size} color="magenta" duration={300} />
          <PoppingCircle size={size} color="magenta" duration={350} />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default LikeButton;
