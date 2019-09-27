import { CLICK_TOGGLE_INFO_PANEL, CLICK_TOGGLE_FILTER_PANEL } from "./Action";

const panelState = {
  filterPanelIsOpen: false,
  infoPanelIsOpen: false
};

export default function reducer(state = panelState, action) {
  switch (action.type) {
    case CLICK_TOGGLE_INFO_PANEL:
      return Object.assign({}, state, {
        filterPanelIsOpen: state.filterPanelIsOpen,
        infoPanelIsOpen: !state.infoPanelIsOpen
      });
    case CLICK_TOGGLE_FILTER_PANEL:
      return Object.assign({}, state, {
        filterPanelIsOpen: !state.filterPanelIsOpen,
        infoPanelIsOpen: state.infoPanelIsOpen
      });
    default:
      return state;
  }
}
