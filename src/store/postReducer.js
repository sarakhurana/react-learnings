import * as actionTypes from './actions'

const initialState = {
  posts:[]
};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CREATE_POST:
      return {...state, posts: state.posts.concat(payload) };
      case actionTypes.GET_POSTS:
      return {...state, posts: state.posts.concat(payload) };
      case actionTypes.GET_POSTS_FAILURE:
        return state
    default:
      return state;
  }
};

export default postReducer;
