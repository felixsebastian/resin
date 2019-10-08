import actionTypes from "../../lib/actionTypes";

const { MOVE_TRACKER } = actionTypes;

export default (state = null, action) => {
  switch (action.type) {
    case MOVE_TRACKER:
      return action.payload.tracker;
    default:
      return state;
  }
};
