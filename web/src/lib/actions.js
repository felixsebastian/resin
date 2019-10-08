import types from "./actionTypes";

export const selectIncident = selection => ({
  type: types.SELECT_INCIDENT,
  payload: { selection }
});

export const addIncidentToSelection = selection => ({
  type: types.ADD_INCIDENT_TO_SELECTION,
  payload: { selection }
});

// timeline

export const moveTracker = tracker => ({
  type: types.MOVE_TRACKER,
  payload: { tracker }
});

export const changeTimeRange = timeRange => ({
  type: types.CHANGE_TIME_RANGE,
  payload: { timeRange }
});

// filters

export const toggleFilterFieldClicked = e => ({
  type: types.TOGGLE_FILTER_FIELD_CLICKED,
  payload: { field: e.target.dataset.field }
});

// log in

export const logIn = token => ({
  type: types.LOG_IN,
  payload: { token }
});

export const logOut = () => ({
  type: types.LOG_OUT
});
