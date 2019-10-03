import { TimeRange } from "pondjs";

const initialRange = new TimeRange([75 * 60 * 1000, 125 * 60 * 1000]);

export default (state = initialRange, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
