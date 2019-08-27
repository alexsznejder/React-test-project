import {
  ADD_POST,
  RESET_POSTS,
  GET_POSTS,
  DELETE_POST,
  INCREMENT_COUNTER
} from "./types";

const INITIAL_STATE = {
  counter: 0,
  list: []
};

const postsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_POST:
      return {
        ...state,
        list: [...state.list, action.item]
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
        list: payload.posts
      };
    case DELETE_POST:
      return {
        ...state,
        list: payload.posts
      };
    default:
      return state;
  }
};

export default postsReducer;
