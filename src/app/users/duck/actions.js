import types from "./types";

const add = item => ({
  type: types.ADD_USER,
  item
});

const reset = item => ({
  type: types.RESET_USERS,
  item
});

export default {
  add,
  reset
};
