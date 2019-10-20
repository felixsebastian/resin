import location from "./locationMethods";
import time from "./timeMethods";
import number from "./number";
import string from "./string";

export default "".concat(
  location,
  time,
  number,
  string,
  `
    input FiltersInput {
      time: TimeFilterInput
      location: LocationFilterInput
      numVehicles: NumberFilterInput
      damageSeverity: StringFilterInput
      make: StringFilterInput
      model: StringFilterInput
      oem: StringFilterInput
      streetType: StringFilterInput
      speedLimit: NumberFilterInput
      schoolZone: Boolean
      dca: NumberFilterInput
      mode: StringFilterInput
    }
  `
);
