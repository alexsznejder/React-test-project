import {
  ADD_POST,
  DELETE_POST,
  GET_POSTS,
  INCREMENT_COUNTER,
  RESET_POSTS
} from "./types";

export const addPostAction = post => ({
  type: ADD_POST,
  payload: post
});

export const resetPostsAction = () => ({
  type: RESET_POSTS
});

export const incrementCounterAction = () => ({
  type: INCREMENT_COUNTER
});

export const getPostsAction = posts => ({
  type: GET_POSTS,
  payload: { posts }
});

export const deletePostAction = posts => ({
  type: DELETE_POST,
  payload: { posts }
});

export const getPosts = () => async dispatch => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET"
  });
  const posts = await response.json();

  dispatch(getPostsAction(posts));
};
