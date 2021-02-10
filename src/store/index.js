import { combineReducers } from "redux";
import postReducer from "./postReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  post: postReducer,
});
export default rootReducer;
