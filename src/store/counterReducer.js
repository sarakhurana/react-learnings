import * as actionTypes from './actions'

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.ADD:
      return { ...state, counter: state.counter + payload };
    case actionTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case actionTypes.SUBTRACT:
      return { ...state, counter: state.counter - payload };
    default:
      return state;
  }
};

export default counterReducer;
