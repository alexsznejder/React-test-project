import types from "./types";

const INITIAL_STATE = {
  list: []
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return {
        ...state,
        list: [...state.list, action.item]
      };
    case types.RESET_USERS:
      return {
        ...state,
        list: []
      };
    default:
      return state;
  }
};

export default usersReducer;
