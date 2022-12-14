import { createContext, useReducer } from "react";
import moment from "moment";

const TweetContext = createContext(null);

export default TweetContext;

const initialState = {
  reply: {
    id: "reply",
    isReplyedByCurrentUser: false,
    totalReplys: 0,
  },
  retweet: {
    id: "retweet",
    isRetweetedByCurrentUser: false,
    totalRetweets: 0,
  },
  like: {
    id: "like",
    isLikedByCurrentUser: false,
    totalLikes: 0,
  },
  share: {
    id: "share",
    isShareedByCurrentUser: false,
  },
};

const tweetReducer = (tweetState, action) => {
  switch (action.type) {
    case "replyTweet": {
      const { isReplyedByCurrentUser, totalReplys } = tweetState.reply;
      return {
        ...tweetState,
        reply: {
          ...tweetState.reply,
          isReplyedByCurrentUser: !isReplyedByCurrentUser,
          totalReplys: isReplyedByCurrentUser
            ? totalReplys - 1
            : totalReplys + 1,
        },
      };
    }
    case "retweetTweet": {
      const { isRetweetedByCurrentUser, totalRetweets } = tweetState.retweet;
      return {
        ...tweetState,
        retweet: {
          ...tweetState.retweet,
          isRetweetedByCurrentUser: !isRetweetedByCurrentUser,
          totalRetweets: isRetweetedByCurrentUser
            ? totalRetweets - 1
            : totalRetweets + 1,
        },
      };
    }
    case "likeTweet": {
      const { isLikedByCurrentUser, totalLikes } = tweetState.like;
      return {
        ...tweetState,
        like: {
          ...tweetState.like,
          isLikedByCurrentUser: !isLikedByCurrentUser,
          totalLikes: isLikedByCurrentUser ? totalLikes - 1 : totalLikes + 1,
        },
      };
    }
    case "shareTweet": {
      const { isShareedByCurrentUser, totalShares } = tweetState.share;
      return {
        ...tweetState,
        share: {
          ...tweetState.share,
          isShareedByCurrentUser: !isShareedByCurrentUser,
        },
      };
    }
    default: {
      throw Error("unknow action type: " + action.type);
    }
  }
};

export const TweetContextProvider = ({ children }) => {
  const [tweetState, dispatch] = useReducer(tweetReducer, initialState);
  const date = moment().format("h:mm a - MMM Do, YYYY");
  return (
    <TweetContext.Provider
      value={{
        tweetState,
        dispatch,
        date,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
