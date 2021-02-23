import axios from "axios";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const CREATE_POST = "CREATE_POST";
export const EDIT_POST = "EDIT_POST";
export const GET_POSTS = "GET_POST";
export const DELETE_POST = "DELETE_POST";
export const GET_POSTS_FAILURE = "GET_POST_FAILURE";
export const FAVOURITE_POST = "FAVOURITE_POST";
export const UNFAVOURITE_POST = "UNFAVOURITE_POST";

export const getPosts = (posts) => ({
  type: GET_POSTS,
  payload: posts,
});

export const getPostFailure = () => ({
  type: GET_POSTS_FAILURE,
});

export const fetchPosts = async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3000/posts");
    const posts = response.data;
    dispatch(getPosts(posts));
  } catch (e) {
    dispatch(getPostFailure());
  }
};

export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post,
});

export const deletePost = (index) => ({
  type: DELETE_POST,
  payload: index,
});

export const favouritePost = (index) => ({
  type: FAVOURITE_POST,
  payload: index,
});

export const editPost = (post) => ({
  type: EDIT_POST,
  payload: post
})