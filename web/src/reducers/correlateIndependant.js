import types from "../lib/actionTypes";

export default (state = null, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.CHANGE_CORRELATE_INDEPENDANT:
      return payload.field || null;
    default:
      return state;
  }
};
