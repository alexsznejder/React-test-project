import usersReducer from "./reducers";

export { GET_USERS, RESET_USERS, USERS_LOADING } from "./types";
export { resetUsers, getUsers, usersLoading } from "./actions";
export default usersReducer;
