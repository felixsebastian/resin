export const CLICK_TOGGLE_FILTER_PANEL = "CLICK_TOGGLE_FILTER_PANEL";
export const CLICK_TOGGLE_INFO_PANEL = "CLICK_TOGGLE_INFO_PANEL";
export const HOVER_TRACKER_TIMELINE = "HOVER_TRACKER_TIMELINE";
export const CLICK_TRACKER_TIMELINE = "CLICK_TRACKER_TIMELINE";

export function clickToggleInfoPanel(payload) {
  return {
    type: CLICK_TOGGLE_INFO_PANEL,
    payload
  };
}

export function clickToggleFilterPanel(payload) {
  return {
    type: CLICK_TOGGLE_FILTER_PANEL,
    payload
  };
}

export function hoverTrackerTimeline(payload) {
  return {
    type: HOVER_TRACKER_TIMELINE,
    payload
  };
}

export function clickTrackerTimeline(payload) {
  return {
    type: CLICK_TRACKER_TIMELINE,
    payload
  };
}
