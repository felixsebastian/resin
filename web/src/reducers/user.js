import types from "../lib/actionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return action.payload;
    case types.LOG_OUT:
      return null;
    default:
      return state;
  }
};
