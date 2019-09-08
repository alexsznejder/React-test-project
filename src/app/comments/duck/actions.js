import {
  GET_COMMENTS,
  ADD_COMMENT,
  INCREMENT_COUNTER,
  COMMENTS_LOADING
} from "./types";

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

const commentsLoadingAction = isLoading => ({
  type: COMMENTS_LOADING,
  payload: { isLoading }
});

export const getComments = () => async dispatch => {
  dispatch(commentsLoading(true));

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments",
    {
      method: "GET"
    }
  );
  const comments = await response.json();

  dispatch(getCommentsAction(comments));
  dispatch(commentsLoading(false));
};

export const addComment = comment => dispatch => {
  dispatch(addCommentAction(comment));
};

export const commentsLoading = isLoading => dispatch => {
  dispatch(commentsLoadingAction(isLoading));
};

export const incrementCounter = () => dispatch => {
  dispatch(incrementCounterAction());
};
