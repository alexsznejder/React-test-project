import { RESET_USERS, GET_USERS } from "./types";

export const resetUsersAction = () => ({
  type: RESET_USERS
});

export const getUsersAction = users => ({
  type: GET_USERS,
  payload: { users }
});

export const resetUsers = () => dispatch => {
  dispatch(resetUsersAction());
};

export const getUsers = () => async dispatch => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET"
  });
  const users = await response.json();

  dispatch(getUsersAction(users));
};
