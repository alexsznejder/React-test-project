import types from "./types";

const add = item => ({
  type: types.ADD_POST,
  item
});

const reset = item => ({
  type: types.RESET_POSTS,
  item
});

const increment = item => ({
  type: types.INCREMENT_COUNTER,
  item
});

export default {
  add,
  reset,
  increment
};
