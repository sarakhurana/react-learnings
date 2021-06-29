import React, { useReducer } from "react";
import rootReducer from "../store/index";

const initialState = {
  post: { posts: [] },
};
export const Context = React.createContext(initialState);

const { Provider } = Context;

export const StateProvider = ({ children, value }) => {
  let [state, dispatch] = useReducer(rootReducer, initialState);
  state = value ? value : state;
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
