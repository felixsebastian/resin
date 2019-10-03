import types from "./actionTypes";

export const incidentSelected = selection => ({
  type: types.INCIDENT_SELECTED,
  payload: selection
});

// timeline

export const trackerMoved = time => ({
  type: types.TRACKER_MOVED,
  payload: time
});

export const timeRangeChanged = timerange => ({
  type: types.TIME_RANGE_CHANGED,
  payload: timerange
});

export const zoomLevelChanged = width => ({
  type: types.ZOOM_LEVEL_CHANGED,
  payload: width
});
