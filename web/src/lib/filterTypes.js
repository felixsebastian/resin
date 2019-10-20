import Radius from "../components/filters/inputs/Radius";
import Rectangle from "../components/filters/inputs/Rectangle";
import Number from "../components/filters/inputs/Number";

export default {
  location: {
    radius: { text: "is within radius", component: Radius },
    rectangle: { text: "is within rectangle", component: Rectangle }
  },
  time: {
    range: { text: "is within" },
    timeOfDay: { text: "of day is within" }
  },
  string: {
    is: { text: "is" },
    contains: { text: "contains" }
  },
  number: {
    is: { text: "is", component: Number },
    range: { text: "is between" },
    greaterThan: { text: "is greater than" },
    lessThan: { text: "is less than" }
  }
};
