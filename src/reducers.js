import { combineReducers } from "redux";
import commentsReducer from "./app/comments/duck";
import postsReducer from "./app/posts/duck";
import usersReducer from "./app/users/duck";

const rootReducer = combineReducers({
  comments: commentsReducer,
  posts: postsReducer,
  users: usersReducer
});

export default rootReducer;
