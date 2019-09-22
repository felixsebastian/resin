import { CLICK_TOGGLE_PANEL, HOVER_TOGGLE_PANEL } from "../constants/GeoConstants";

const panelState = {
  briefIsOpen: false,
  panelIsOpen: false
};

export default function geoReducer (state = panelState, action) {
  switch (action.type) {
    case CLICK_TOGGLE_PANEL:
      return Object.assign({}, state, {
        panelIsOpen: !state.panelIsOpen
      });
      break;
    case HOVER_TOGGLE_PANEL:
      return Object.assign({}, state, {
        briefIsOpen: !state.briefIsOpen
      });
    }
  return state;
}