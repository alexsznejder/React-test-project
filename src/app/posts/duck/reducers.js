import {
  ADD_POST,
  RESET_POSTS,
  GET_POSTS,
  DELETE_POST,
  INCREMENT_COUNTER,
  POSTS_LOADING
} from "./types";

const INITIAL_STATE = {
  counter: 0,
  list: [],
  isLoading: false
};

const postsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_POST:
      return {
        ...state,
        list: [...state.list, payload.post]
      };
    case RESET_POSTS:
      return {
        ...INCREMENT_COUNTER
      };
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case GET_POSTS:
      return {
        ...state,
        list: payload.posts,
        counter: payload.posts.length
      };
    case POSTS_LOADING:
      return {
        ...state,
        isLoading: payload.isLoading
      };
    case DELETE_POST:
      return {
        ...state,
        list: state.list.filter(post => post.id !== parseInt(payload.id))
      };
    default:
      return state;
  }
};

export default postsReducer;
