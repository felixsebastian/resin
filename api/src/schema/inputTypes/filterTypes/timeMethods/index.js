import range from "./range";
import timeOfDay from "./tod";

export default "".concat(
  range,
  timeOfDay,
  `
    input TimeFilterInput {
      timeRange: TimeRangeFilterInput
      timeOfDay: TimeTodFilterInput
    }
  `
);
