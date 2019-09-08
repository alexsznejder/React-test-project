import postsReducer from "./reducers";

export {
  ADD_POST,
  DELETE_POST,
  GET_POSTS,
  INCREMENT_COUNTER,
  RESET_POSTS,
  POSTS_LOADING
} from "./types";
export { getPosts, addPost, deletePost, incrementCounter } from "./actions";
export default postsReducer;
