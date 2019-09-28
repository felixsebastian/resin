import actionTypes from "../lib/actionTypes";

const { SELECT_INCIDENT } = actionTypes;

export default (state = [], action) => {
  switch (action.type) {
    case SELECT_INCIDENT:
      return [action.payload];
    default:
      return state;
  }
};
