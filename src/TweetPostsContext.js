import { createContext, useReducer } from "react";
import moment from "moment";
import tweetsData from "./assets/tweetsData.json";
import userData from "./assets/userData.json";

const TweetPostsContext = createContext(null);

export default TweetPostsContext;

const loginUserName = "adage";

const initialState = [...tweetsData].sort(
  (a, b) => b["timestamp"] - a["timestamp"]
);

const tweetReducer = (tweetState, action) => {
  const tweetInteraction = (actionName) => {
    let newTweetState = [...tweetState];
    newTweetState = newTweetState.map((tweet) => {
      if (
        tweet["userScreenName"] !== loginUserName &&
        tweet["tweetId"] === action.tweetId
      ) {
        if (!tweet[actionName].includes(loginUserName)) {
          let newActionName = [...tweet[actionName], loginUserName];
          return { ...tweet, [actionName]: newActionName };
        } else {
          let newActionName = [...tweet[actionName]].filter(
            (item) => item !== loginUserName
          );
          return { ...tweet, [actionName]: newActionName };
        }
      } else {
        return tweet;
      }
    });
    return [...newTweetState];
  };

  switch (action.type) {
    case "replyTweet": {
      return tweetInteraction("replyCount");
    }
    case "retweetTweet": {
      return tweetInteraction("retweetCount");
    }

    case "likeTweet": {
      return tweetInteraction("favoriteCount");
    }
    // case "shareTweet": {
    //   const { isShareedByCurrentUser, totalShares } = tweetState.share;
    //   return {
    //     ...tweetState,
    //     share: {
    //       ...tweetState.share,
    //       isShareedByCurrentUser: !isShareedByCurrentUser,
    //     },
    //   };
    // }
    default: {
      throw Error("unknow action type: " + action.type);
    }
  }
};

export const TweetPostsContextProvider = ({ children }) => {
  const [tweetState, dispatch] = useReducer(tweetReducer, initialState);
  // const date = moment().format("h:mm a - MMM Do, YYYY");
  return (
    <TweetPostsContext.Provider
      value={{
        tweetState,
        dispatch,
        loginUserName,
        // date,
      }}
    >
      {children}
    </TweetPostsContext.Provider>
  );
};
