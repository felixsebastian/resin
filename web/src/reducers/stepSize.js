import types from "../lib/actionTypes";

export default (state = 1, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.CHANGE_STEP_SIZE:
      return payload.stepSize || 1;
    default:
      return state;
  }
};
