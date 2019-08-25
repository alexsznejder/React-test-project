import types from "./types";

const INITIAL_STATE = {
  counter: 0,
  list: []
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_POST:
      return {
        ...state,
        list: [...state.list, action.item]
      };
    case types.RESET_POSTS:
      return {
        ...state,
        list: [],
        counter: 0
      };
    case types.INCREMENT_COUNTER:
        return {
          ...state,
          counter: state.counter + 1
        };
    default:
      return state;
  }
};

export default postsReducer;
