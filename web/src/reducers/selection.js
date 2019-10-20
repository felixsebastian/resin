import types from "../lib/actionTypes";

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CLEAR_SELECTION:
      return [];
    case types.TOGGLE_SELECTION_IS_INCIDENT:
      return state.length !== 1 || state[0] !== payload.id ? [payload.id] : [];
    case types.TOGGLE_INCIDENT_INCLUDED_IN_SELECTION:
      return state.includes(payload.id)
        ? state.filter(id => id !== payload.id)
        : [...state, payload.id];
    default:
      return state;
  }
};
