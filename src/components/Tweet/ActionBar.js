import styled from "styled-components";

import LikeButton from "../LikeButton";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";
import { useContext } from "react";
import TweetContext from "../../TweetContext";
import Rotate from "./Rotate";
import PoppingCircle from "../LikeButton/PoppingCircle";
import TweetPostsContext from "../../TweetPostsContext";

const ActionBar = ({ tweet }) => {
  const { dispatch, loginUserName } = useContext(TweetPostsContext);
  // const { isRetweetedByCurrentUser, totalRetweets } = tweetState.retweet;
  // const { isLikedByCurrentUser, totalLikes } = tweetState.like;
  // const { isShareedByCurrentUser, totalShares } = tweetState.share;
  // const { isReplyedByCurrentUser, totalReplys } = tweetState.reply;
  const totalRetweets = tweet["retweetCount"].length;
  const totalLikes = tweet["favoriteCount"].length;
  const totalReplys = tweet["replyCount"].length;
  const isRetweetedByCurrentUser =
    tweet["retweetCount"].includes(loginUserName);
  const isLikedByCurrentUser = tweet["favoriteCount"].includes(loginUserName);
  const isReplyedByCurrentUser = tweet["replyCount"].includes(loginUserName);

  return (
    <Wrapper>
      <IconWrapper>
        <Action
          color="rgb(27, 149, 224)"
          size={40}
          onClick={() => {
            dispatch({ type: "replyTweet", tweetId: tweet["tweetId"] });
          }}
        >
          <TweetActionIcon
            kind="reply"
            color={isReplyedByCurrentUser ? "rgb(27, 149, 224)" : undefined}
          />
          {isReplyedByCurrentUser && (
            <>
              <PoppingCircle
                size={40}
                color="rgb(27, 149, 224)"
                duration={250}
              />
              <PoppingCircle
                size={40}
                color="rgb(27, 149, 224)"
                duration={300}
              />
              <PoppingCircle
                size={40}
                color="rgb(27, 149, 224)"
                duration={350}
              />
            </>
          )}
        </Action>
        <Stat>
          {totalReplys > 1000
            ? `${Math.round((totalReplys / 1000) * 100) / 100}k`
            : totalReplys}
        </Stat>
      </IconWrapper>
      <IconWrapper>
        <Action
          color="rgb(23, 191, 99)"
          size={40}
          onClick={() => {
            dispatch({ type: "retweetTweet", tweetId: tweet["tweetId"] });
          }}
        >
          <Rotate reverse={!isRetweetedByCurrentUser}>
            <TweetActionIcon
              kind="retweet"
              color={isRetweetedByCurrentUser ? "rgb(23, 191, 99)" : undefined}
            />
          </Rotate>
          {isRetweetedByCurrentUser && (
            <>
              <PoppingCircle
                size={40}
                color="rgb(23, 191, 99)"
                duration={250}
              />
              <PoppingCircle
                size={40}
                color="rgb(23, 191, 99)"
                duration={300}
              />
              <PoppingCircle
                size={40}
                color="rgb(23, 191, 99)"
                duration={350}
              />
            </>
          )}
        </Action>
        <Stat>
          {totalRetweets > 1000
            ? `${Math.round((totalRetweets / 1000) * 100) / 100}k`
            : totalRetweets}
        </Stat>
      </IconWrapper>
      <IconWrapper>
        <Action
          color="rgb(224, 36, 94)"
          size={40}
          onClick={() => {
            dispatch({ type: "likeTweet", tweetId: tweet["tweetId"] });
          }}
        >
          <LikeButton isLikedByCurrentUser={isLikedByCurrentUser} />
        </Action>
        <Stat>
          {totalLikes > 1000
            ? `${Math.round((totalLikes / 1000) * 100) / 100}k `
            : totalLikes}
        </Stat>
      </IconWrapper>
      <IconWrapper>
        <Action
          color="rgb(27, 149, 224)"
          size={40}
          // onClick={() => {
          //   dispatch({ type: "shareTweet" });
          // }}
        >
          <TweetActionIcon kind="share" />
        </Action>
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

const Stat = styled.p`
  font-size: 15px;
  font-weight: 600;
  width: 50px;
  text-align: left;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export default ActionBar;
