import Radius from "../components/filters/inputs/Radius";
import StringIs from "../components/filters/inputs/StringIs";

export default {
  location: { RADIUS: { text: "is within radius", component: Radius } },
  time: {
    WITHIN: { text: "is within" },
    TIME_OF_DAY_WITHIN: { text: "is within" }
  },
  string: {
    IS: { text: "is", component: StringIs },
    CONTAINS: { text: "contains" }
  },
  number: {
    IS: { text: "is" },
    BETWEEN: { text: "is between" },
    GREATER_THAN: { text: "is greater than" },
    LESS_THAN: { text: "is less than" }
  }
};
