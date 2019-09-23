export const CLICK_TOGGLE_PANEL = 'CLICK_TOGGLE_PANEL';
export const HOVER_TOGGLE_PANEL = 'HOVER_TOGGLE_PANEL';

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