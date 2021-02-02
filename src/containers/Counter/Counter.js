import React, { useContext } from "react";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/actions";
import { CounterContext } from "../../context/CounterContext";

const Counter = () => {
  const { dispatch, state } = useContext(CounterContext);
  return (
    <div>
      <CounterOutput value={state.counter} />
      <CounterControl
        label="Increment"
        clicked={() => dispatch({ type: actionTypes.INCREMENT })}
      />
      <CounterControl
        label="Decrement"
        clicked={() => dispatch({ type: actionTypes.DECREMENT })}
      />
      <CounterControl
        label="Add 5"
        clicked={() => dispatch({ type: actionTypes.ADD, payload: 5 })}
      />
      <CounterControl
        label="Subtract 5"
        clicked={() => dispatch({ type: actionTypes.SUBTRACT, payload: 5 })}
      />
    </div>
  );
};
export default Counter;
