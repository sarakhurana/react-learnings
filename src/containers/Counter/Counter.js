import React from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/actions";

const Counter = (props) => {
  return (
    <div>
      <CounterOutput value={props.ctr} />
      <CounterControl label="Increment" clicked={props.onIncrementCounter} />
      <CounterControl label="Decrement" clicked={props.onDecrementCounter} />
      <CounterControl label="Add 5" clicked={()=>props.onAddToCounter(5)} />
      <CounterControl
        label="Subtract 5"
        clicked={()=>props.onSubtractFromCounter(5)}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onAddToCounter: (value) => dispatch({ type: actionTypes.ADD, payload: value }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onSubtractFromCounter: (value) => dispatch({ type: actionTypes.SUBTRACT, payload: value }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
