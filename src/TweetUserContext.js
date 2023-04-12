import { createContext, useReducer } from "react";
import userData from "./assets/userData.json";

const TweetUserContext = createContext(null);

export default TweetUserContext;

const loginUserName = "Reuter";

const initialState = [...userData];

const tweetUserReducer = (tweetUserState, action) => {
  switch (action.type) {
    case "loadUserData": {
      return [...userData];
    }
    case "followUser": {
      const user = loginUserName;
      const followUser = action.userScreenName;
      let userInfo = tweetUserState.filter(
        (u) => u["userScreenName"] === user
      )[0];
      const userInfoIndex = tweetUserState.indexOf(userInfo);
      let followUserInfo = tweetUserState.filter(
        (u) => u["userScreenName"] === followUser
      )[0];
      let followUserInfoIndex = tweetUserState.indexOf(followUserInfo);
      let newFollowing = [...userInfo["userFollowingAccounts"]];
      newFollowing.push(followUser);
      userInfo = {
        ...userInfo,
        userFollowingAccounts: [...newFollowing],
      };
      console.log(userInfo);

      let newFollowUserInfo = [...followUserInfo["userFollowedByAccounts"]];
      newFollowUserInfo.push(user);
      followUserInfo = {
        ...followUserInfo,
        userFollowedByAccounts: [...newFollowUserInfo],
      };
      console.log(followUserInfo);

      let newTweetUserState = [...tweetUserState];
      newTweetUserState[userInfoIndex] = userInfo;
      newTweetUserState[followUserInfoIndex] = followUserInfo;
      return [...newTweetUserState];
    }
    case "unfollowUser": {
      const user = loginUserName;
      const followUser = action.userScreenName;
      let userInfo = tweetUserState.filter(
        (u) => u["userScreenName"] === user
      )[0];
      const userInfoIndex = tweetUserState.indexOf(userInfo);
      let followUserInfo = tweetUserState.filter(
        (u) => u["userScreenName"] === followUser
      )[0];
      let followUserInfoIndex = tweetUserState.indexOf(followUserInfo);
      let newFollowing = new Set(
        [...userInfo["userFollowingAccounts"]].filter((u) => u !== followUser)
      );
      userInfo = {
        ...userInfo,
        userFollowingAccounts: [...newFollowing],
      };
      // console.log(userInfo);

      let newFollowUserInfo = new Set(
        [...followUserInfo["userFollowedByAccounts"]].filter((u) => u !== user)
      );
      followUserInfo = {
        ...followUserInfo,
        userFollowedByAccounts: [...newFollowUserInfo],
      };
      // console.log(followUserInfo);

      let newTweetUserState = [...tweetUserState];
      newTweetUserState[userInfoIndex] = userInfo;
      newTweetUserState[followUserInfoIndex] = followUserInfo;
      return [...newTweetUserState];
    }

    default: {
      throw Error("unknow action type: " + action.type);
    }
  }
};

export const TweetUserContextProvider = ({ children }) => {
  const [tweetUserState, tweetUserDispatch] = useReducer(
    tweetUserReducer,
    initialState
  );
  return (
    <TweetUserContext.Provider
      value={{
        tweetUserState,
        tweetUserDispatch,
      }}
    >
      {children}
    </TweetUserContext.Provider>
  );
};
