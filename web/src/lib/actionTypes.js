const actionTypes = [
  // user
  "TOGGLE_SELECTION_IS_INCIDENT",
  "TOGGLE_INCIDENT_INCLUDED_IN_SELECTION",
  "CLEAR_SELECTION",
  "ADD_FILTER",
  "REMOVE_FILTER",
  "CLEAR_FILTERS",
  "CHANGE_FILTER_VALUE",
  "CHANGE_FILTER_TYPE",
  "MOVE_TRACKER",
  "CHANGE_TIME_RANGE",
  "SELECT_SENSOR",
  "CHANGE_INDEPENDANT",
  "CHANGE_STEP_SIZE",
  // system
  "KEY_DOWN",
  "KEY_UP",
  // async
  "LOG_IN",
  "LOG_OUT"
];

export default actionTypes.reduce((res, o) => {
  res[o] = o;
  return res;
}, {});
