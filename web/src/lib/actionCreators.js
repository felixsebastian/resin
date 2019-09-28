import types from "./actionTypes";

export function selectIncident() {
  return {
    type: types.SELECT_INCIDENT
  };
}

export function clickToggleFilterPanel() {
  return {
    type: types.CLICK_TOGGLE_FILTER_PANEL
  };
}
