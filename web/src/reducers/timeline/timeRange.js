import { TimeRange } from "pondjs";
import actionTypes from "../../lib/actionTypes";

const defaultTimeRange = new TimeRange([75 * 60 * 1000, 125 * 60 * 1000]);

export default (state = defaultTimeRange, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TIME_RANGE:
      return action.payload.timeRange || defaultTimeRange;
    default:
      return state;
  }
};
