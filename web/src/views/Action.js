export const CLICK_TOGGLE_FILTER_PANEL = 'CLICK_TOGGLE_FILTER_PANEL';
export const CLICK_TOGGLE_INFO_PANEL = 'CLICK_TOGGLE_INFO_PANEL'

export function clickToggleInfoPanel(payload) {
  return {
    type: CLICK_TOGGLE_INFO_PANEL,
    payload
  }
}

export function clickToggleFilterPanel(payload) {
  return {
    type: CLICK_TOGGLE_FILTER_PANEL,
    payload
  }
}