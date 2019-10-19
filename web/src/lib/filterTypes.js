import Radius from "../components/filters/inputs/Radius";

export default {
  location: { RADIUS: { text: "is within radius", component: Radius } },
  time: {
    WITHIN: { text: "is within" },
    TIME_OF_DAY_WITHIN: { text: "of day is within" }
  },
  string: {
    IS: { text: "is" },
    CONTAINS: { text: "contains" }
  },
  number: {
    IS: { text: "is" },
    BETWEEN: { text: "is between" },
    GREATER_THAN: { text: "is greater than" },
    LESS_THAN: { text: "is less than" }
  }
};
