import types from "./types";

const add = item => ({
  type: types.ADD_COMMENT,
  item
});

const reset = item => ({
  type: types.RESET_COMMENT,
  item
})

export default {
  add,
  reset
};