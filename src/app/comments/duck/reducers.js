import { GET_COMMENTS, ADD_COMMENT, RESET_COMMENT } from "./types";

const INITIAL_STATE = {
  list: []
};

const commentsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_COMMENT:
      return {
        ...state,
        list: [...state, action.item]
      };
    case RESET_COMMENT:
      return {
        ...state,
        list: []
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
