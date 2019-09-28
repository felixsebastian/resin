import selection from "../reducers/selection";

export default (state, action) => {
  return {
    ...state,
    selection: selection(state, action)
  };
};
