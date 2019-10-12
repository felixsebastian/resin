const actionTypes = [
  "SELECT_INCIDENT",
  "ADD_INCIDENT_TO_SELECTION",
  "TOGGLE_FILTER_FIELD_CLICKED",
  "MOVE_TRACKER",
  "CHANGE_TIME_RANGE",
  "SELECT_SENSOR",
  // async
  "LOG_IN",
  "LOG_OUT"
];

export default actionTypes.reduce((res, o) => {
  res[o] = o;
  return res;
}, {});
