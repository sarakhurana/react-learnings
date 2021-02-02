import React, { useReducer } from "react";
import reducer from "../store/reducer"

const initialState = {
  counter:0,
}
export const CounterContext = React.createContext(initialState);

const { Provider } = CounterContext;

export const StateProvider = ({ children, value }) => {
  let [state, dispatch] = useReducer(reducer, initialState);
  state = value ? value : state;
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};