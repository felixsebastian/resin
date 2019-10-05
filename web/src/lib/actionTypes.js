const actionTypes = [
  "INCIDENT_SELECTED",
  "INCIDENT_ADDED_TO_SELECTION",
  "TOGGLE_FILTER_FIELD_CLICKED",
  "INIT_TIMELINE",
  "TRACKER_MOVED",
  "TIME_RANGE_CHANGED"
];

export default actionTypes.reduce((res, o) => {
  res[o] = o;
  return res;
}, {});
