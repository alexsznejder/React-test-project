import { GET_COMMENTS, ADD_COMMENT, INCREMENT_COUNTER } from "./types";

const addCommentAction = comment => ({
  type: ADD_COMMENT,
  payload: { comment }
});

const incrementCounterAction = () => ({
  type: INCREMENT_COUNTER
});

const getCommentsAction = comments => ({
  type: GET_COMMENTS,
  payload: { comments }
});

export const getComments = () => async dispatch => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments",
    {
      method: "GET"
    }
  );
  const comments = await response.json();

  dispatch(getCommentsAction(comments));
};

export const addComment = comment => dispatch => {
  dispatch(addCommentAction(comment));
};

export const incrementCounter = () => dispatch => {
  dispatch(incrementCounterAction());
};
