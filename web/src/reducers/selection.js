import actionTypes from "../lib/actionTypes";

const { INCIDENT_SELECTED } = actionTypes;

export default (state = [], action) => {
  switch (action.type) {
    case INCIDENT_SELECTED:
      return [action.payload];
    default:
      return state;
  }
};
