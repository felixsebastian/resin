import types from "../lib/actionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case types.SELECT_SENSOR:
      return action.payload.id;
    default:
      return state;
  }
};
