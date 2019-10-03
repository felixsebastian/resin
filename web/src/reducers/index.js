import selection from "./selection";
import timeline from "./timeline";

export default (state, action) => {
  return {
    ...state,
    selection: selection(state, action),
    timeline: timeline(state, action)
  };
};
