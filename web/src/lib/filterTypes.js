import Radius from "../components/filters/inputs/Radius";
import Rectangle from "../components/filters/inputs/Rectangle";
import Number from "../components/filters/inputs/Number";
import NumberBetween from "../components/filters/inputs/NumberBetween";

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
    eq: { text: "is" },
    not: { text: "is not" },
    contains: { text: "contains" }
  },
  number: {
    eq: { text: "is", component: Number },
    not: { text: "is not", component: Number },
    between: { text: "is between", component: NumberBetween },
    gt: { text: "is greater than", component: Number },
    lt: { text: "is less than", component: Number }
  }
};
