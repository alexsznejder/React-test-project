import { ADD_USER, GET_USERS, RESET_USERS } from "./types";

const INITIAL_STATE = {
  list: []
};

const usersReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_USER:
      return {
        ...state,
        list: [...state.list, payload.user]
      };
    case GET_USERS:
      return {
        ...state,
        list: payload.users
      };
    case RESET_USERS:
      return {
        ...state,
        list: []
      };
    default:
      return state;
  }
};

export default usersReducer;
