import { GET_USERS, RESET_USERS } from "./types";

const INITIAL_STATE = {
  list: []
};

const usersReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
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
