import { GET_USERS, RESET_USERS, USERS_LOADING } from "./types";

const INITIAL_STATE = {
  list: [],
  isLoading: false
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
    case USERS_LOADING:
      return {
        ...state,
        isLoading: payload.isLoading
      };
    default:
      return state;
  }
};

export default usersReducer;
