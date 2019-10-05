import { TimeRange } from "pondjs";
import actionTypes from "../../lib/actionTypes";

export default (
  state = new TimeRange([75 * 60 * 1000, 125 * 60 * 1000]),
  action
) => {
  switch (action.type) {
    case actionTypes.TIME_RANGE_CHANGED:
      return action.payload.timeRange;
    default:
      return state;
  }
};
