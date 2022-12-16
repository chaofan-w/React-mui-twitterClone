import { createContext, useReducer } from "react";
import moment from "moment";
import tweetsData from "./assets/tweetsData.json";
import userData from "./assets/userData.json";

const TweetPostsContext = createContext(null);

export default TweetPostsContext;

const loginUserName = "Reuters";

const initialState = [...tweetsData].sort(
  (a, b) => b["timestamp"] - a["timestamp"]
);

const tweetInteraction = (actionName, state, action) => {
  let newTweetState = [...state];
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
  return [...newTweetState].sort((a, b) => b["timestamp"] - a["timestamp"]);
};

const sendingTweet = (state, action) => {
  const loginUserData = userData.filter(
    (user) => user["userScreenName"] === loginUserName
  )[0];
  const { userId, userName, profileImgUrl } = loginUserData;
  const { tweetId, text, imgAttachmentUrl, timestamp } = action;
  let newTweet = {
    tweetId: tweetId,
    text: text,
    imgAttachmentUrl: imgAttachmentUrl,
    timestamp: timestamp,
    favoriteCount: [],
    retweetCount: [],
    replyCount: [],
    userReplyToUserScreenName: "None",
    userId: userId,
    userName: userName,
    userScreenName: loginUserName,
    profileImgUrl: profileImgUrl,
  };
  return [...state, newTweet].sort((a, b) => b["timestamp"] - a["timestamp"]);
};

const tweetReducer = (tweetState, action) => {
  // const tweetInteraction = (actionName) => {
  //   let newTweetState = [...tweetState];
  //   newTweetState = newTweetState.map((tweet) => {
  //     if (
  //       tweet["userScreenName"] !== loginUserName &&
  //       tweet["tweetId"] === action.tweetId
  //     ) {
  //       if (!tweet[actionName].includes(loginUserName)) {
  //         let newActionName = [...tweet[actionName], loginUserName];
  //         return { ...tweet, [actionName]: newActionName };
  //       } else {
  //         let newActionName = [...tweet[actionName]].filter(
  //           (item) => item !== loginUserName
  //         );
  //         return { ...tweet, [actionName]: newActionName };
  //       }
  //     } else {
  //       return tweet;
  //     }
  //   });
  //   return [...newTweetState].sort((a, b) => b["timestamp"] - a["timestamp"]);
  // };

  switch (action.type) {
    case "replyTweet": {
      return tweetInteraction("replyCount", tweetState, action);
    }
    case "retweetTweet": {
      return tweetInteraction("retweetCount", tweetState, action);
    }

    case "likeTweet": {
      return tweetInteraction("favoriteCount", tweetState, action);
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
    case "sendingNewTweet": {
      return sendingTweet(tweetState, action);
    }
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
        userData,
      }}
    >
      {children}
    </TweetPostsContext.Provider>
  );
};
