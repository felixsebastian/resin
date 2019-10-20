import radius from "./radius";
import rectangle from "./rectangle";

export default "".concat(
  radius,
  rectangle,
  `
    input LocationFilterInput {
      radius: LocationRadiusFilterInput
      rectangle: RectangleFilterInput
    }
  `
);
