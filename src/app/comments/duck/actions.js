import { GET_COMMENTS, ADD_COMMENT, RESET_COMMENT } from "./types";

export const addCommentAction = comment => ({
  type: ADD_COMMENT,
  payload: { comment }
});

export const resetCommentAction = () => ({
  type: RESET_COMMENT
});

export const getCommentsAction = comments => ({
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
