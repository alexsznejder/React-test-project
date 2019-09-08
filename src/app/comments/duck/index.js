import commentsReducers from "./reducers";

export {
  GET_COMMENTS,
  ADD_COMMENT,
  INCREMENT_COUNTER,
  COMMENTS_LOADING
} from "./types";
export { getComments, addComment, incrementCounter } from "./actions";
export default commentsReducers;
