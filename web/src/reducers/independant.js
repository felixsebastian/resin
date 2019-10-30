import types from "../lib/actionTypes";

export default (state = null, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.CHANGE_INDEPENDANT:
      return payload.independant || null;
    default:
      return state;
  }
};
