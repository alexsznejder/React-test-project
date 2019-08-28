import { GET_COMMENTS, ADD_COMMENT, INCREMENT_COUNTER } from "./types";

const INITIAL_STATE = {
  counter: 0,
  list: []
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
        list: payload.comments
      };
    default:
      return state;
  }
};

export default commentsReducer;
