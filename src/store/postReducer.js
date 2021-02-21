import * as actionTypes from "./actions";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CREATE_POST:
      return { ...state, posts: state.posts.concat(payload) };
    case actionTypes.GET_POSTS:
      return { ...state, posts: state.posts.concat(payload) };
    case actionTypes.GET_POSTS_FAILURE:
      return state;
    case actionTypes.DELETE_POST: {
      const updatedArray = state.posts.filter(
        result => result.postId !== payload.id
      );
      return { ...state, posts: updatedArray };
    }
      case actionTypes.FAVOURITE_POST: {
        const posts=state.posts;
        const index=posts.findIndex(post=>post.postId===payload.id)
        const newStatus= !posts[index].isFavourite
        const updatedState=state.posts;
        updatedState[index]={...state.posts[index], isFavourite:newStatus}
        return {...state, posts:updatedState};
    }
  
    default:
      return state;
  }
};

export default postReducer;
