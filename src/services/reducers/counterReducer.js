import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET_COUNT,
} from "../constants/counterConstants";

const initialCounter = {
  count: 0,
};
const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET_COUNT:
      return {
        ...state,
        count: (state.count = 0),
      };

    default:
      return state;
  }
};

export default counterReducer;
