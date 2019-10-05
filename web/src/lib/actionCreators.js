import types from "./actionTypes";

export const incidentSelected = selection => ({
  type: types.INCIDENT_SELECTED,
  payload: { selection }
});

export const incidentAddedToSelection = selection => ({
  type: types.INCIDENT_ADDED_TO_SELECTION,
  payload: { selection }
});

// timeline

export const trackerMoved = tracker => ({
  type: types.TRACKER_MOVED,
  payload: { tracker }
});

export const timeRangeChanged = timeRange => ({
  type: types.TIME_RANGE_CHANGED,
  payload: { timeRange }
});

// filters

export const toggleFilterFieldClicked = e => ({
  type: types.TOGGLE_FILTER_FIELD_CLICKED,
  payload: { field: e.target.dataset.field }
});
