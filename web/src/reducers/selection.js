import actionTypes from "../lib/actionTypes";

const { SELECT_INCIDENT, ADD_INCIDENT_TO_SELECTION } = actionTypes;

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case SELECT_INCIDENT:
      return [payload.selection];
    case ADD_INCIDENT_TO_SELECTION:
      return [...state, payload.selection];
    default:
      return state;
  }
};
