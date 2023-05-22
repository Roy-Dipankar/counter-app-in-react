import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCount,
  incrementCount,
  resetCount,
} from "../services/actions/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(incrementCount());
  };

  const decrement = () => {
    dispatch(decrementCount());
  };

  const reset = () => {
    dispatch(resetCount());
  };

  return (
    <div>
      <h1>Count={count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
