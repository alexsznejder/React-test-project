import { RESET_USERS, GET_USERS, USERS_LOADING } from "./types";

const resetUsersAction = () => ({
  type: RESET_USERS
});

const getUsersAction = users => ({
  type: GET_USERS,
  payload: { users }
});

const usersLoadingAction = isLoading => ({
  type: USERS_LOADING,
  payload: { isLoading }
});

export const resetUsers = () => dispatch => {
  dispatch(resetUsersAction());
};

export const usersLoading = isLoading => dispatch => {
  dispatch(usersLoadingAction(isLoading));
};

export const getUsers = () => async dispatch => {
  dispatch(usersLoading(true));

  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET"
  });
  const users = await response.json();

  dispatch(getUsersAction(users));

  dispatch(usersLoading(false));
};
