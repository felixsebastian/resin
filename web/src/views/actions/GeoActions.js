import {CLICK_TOGGLE_PANEL, HOVER_TOGGLE_PANEL}from "../constants/GeoConstants";

export function clickTogglePanel(payload) {
  return {
    type: CLICK_TOGGLE_PANEL,
    payload
  }
}

export function hoverTogglePanel(payload) {
  return {
    type: HOVER_TOGGLE_PANEL,
    payload
  }
}