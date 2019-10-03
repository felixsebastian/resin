import actionTypes from "../lib/actionTypes";

const { INCIDENT_SELECTED, INCIDENT_ADDED_TO_SELECTION } = actionTypes;

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case INCIDENT_SELECTED:
      return [payload.selection];
    case INCIDENT_ADDED_TO_SELECTION:
      return [...state, payload.selection];
    default:
      return state;
  }
};
