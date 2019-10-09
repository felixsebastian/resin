import types from "../lib/actionTypes";
import logIn from "./logIn";

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

const logOut = () => ({
  type: types.LOG_OUT
});

export default {
  logIn,
  //
  selectIncident,
  addIncidentToSelection,
  moveTracker,
  changeTimeRange,
  toggleFilterFieldClicked,
  logOut
};
