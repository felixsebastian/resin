import actionTypes from "../../lib/actionTypes";

const { TRACKER_MOVED } = actionTypes;

export default (state = null, action) => {
  switch (action.type) {
    case TRACKER_MOVED:
      return action.payload.tracker;
    default:
      return state;
  }
};
