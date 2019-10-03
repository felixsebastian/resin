const actionTypes = [
  "INCIDENT_SELECTED",
  "INIT_TIMELINE",
  "TRACKER_MOVED",
  "TIME_RANGE_CHANGED",
  "ZOOM_LEVEL_CHANGED"
];

export default actionTypes.reduce((res, o) => {
  res[o] = o;
  return res;
}, {});
