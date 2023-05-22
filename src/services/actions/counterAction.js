import {
  DECREMENT_COUNT,
  INCREMENT_COUNT,
  RESET_COUNT,
} from "../constants/counterConstants";

export const incrementCount = () => {
  return {
    type: INCREMENT_COUNT,
  };
};

export const decrementCount = () => {
  return {
    type: DECREMENT_COUNT,
  };
};

export const resetCount = () => {
  return {
    type: RESET_COUNT,
  };
};
