import types from "../lib/actionTypes";

export default (state = [], action) => {
  const { payload } = action;

  switch (action.type) {
    case types.KEY_DOWN:
      if (state.includes(payload.key)) return state;
      return [...state, payload.key];
    case types.KEY_UP:
      return state.filter(key => key !== payload.key);
    default:
      return state;
  }
};
