import {
  ADD_POST,
  DELETE_POST,
  GET_POSTS,
  INCREMENT_COUNTER,
  RESET_POSTS,
  POSTS_LOADING
} from "./types";

const addPostAction = post => ({
  type: ADD_POST,
  payload: { post }
});

const postsLoadingAction = isLoading => ({
  type: POSTS_LOADING,
  payload: { isLoading }
});

const resetPostsAction = () => ({
  type: RESET_POSTS
});

const incrementCounterAction = () => ({
  type: INCREMENT_COUNTER
});

const getPostsAction = posts => ({
  type: GET_POSTS,
  payload: { posts }
});

const deletePostAction = id => ({
  type: DELETE_POST,
  payload: { id }
});

export const getPosts = () => async dispatch => {
  dispatch(postsLoading(true));

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET"
  });
  const posts = await response.json();

  dispatch(getPostsAction(posts));
  dispatch(postsLoading(false));
};

export const addPost = post => dispatch => {
  dispatch(addPostAction(post));
};

export const postsLoading = isLoading => dispatch => {
  dispatch(postsLoadingAction(isLoading));
};

export const resetPosts = () => dispatch => {
  dispatch(resetPostsAction());
};

export const incrementCounter = () => dispatch => {
  dispatch(incrementCounterAction());
};

export const deletePost = id => dispatch => {
  dispatch(deletePostAction(id));
};
