import types from "./types"

const INITIAL_STATE = {
  list: []
}

const commentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_COMMENT:
      return {
        ...state,
        list: [...state, action.item]
      };
    case types.RESET_COMMENT:
      return {
        ...state,
        list: []
      };
    default:
      return state;
  }
};

export default commentsReducer;