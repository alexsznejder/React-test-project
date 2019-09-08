import {
  GET_COMMENTS,
  ADD_COMMENT,
  INCREMENT_COUNTER,
  COMMENTS_LOADING
} from "./types";

const INITIAL_STATE = {
  counter: 0,
  list: [],
  isLoading: false
};

const commentsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_COMMENT:
      return {
        ...state,
        list: [...state.list, payload.comment]
      };
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case GET_COMMENTS:
      return {
        ...state,
        list: payload.comments,
        counter: payload.comments.length
      };
    case COMMENTS_LOADING:
      return {
        ...state,
        isLoading: payload.isLoading
      };
    default:
      return state;
  }
};

export default commentsReducer;
