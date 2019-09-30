import { 
  CLICK_TOGGLE_INFO_PANEL, 
  CLICK_TOGGLE_FILTER_PANEL,
  HOVER_TRACKER_TIMELINE,
  CLICK_TRACKER_TIMELINE
} from "./action";

const panelState = {
  filterPanelIsOpen: false,
  infoPanelIsOpen: false,
  tracker: null,
  selection: null
};

export default function reducer(state = panelState, action) {
  switch (action.type) {
    case CLICK_TOGGLE_INFO_PANEL:
      return Object.assign({}, state, {
        filterPanelIsOpen: state.filterPanelIsOpen,
        infoPanelIsOpen: !state.infoPanelIsOpen,
        tracker: state.tracker,
        selection: state.selection
      });
    case CLICK_TOGGLE_FILTER_PANEL:
      return Object.assign({}, state, {
        filterPanelIsOpen: !state.filterPanelIsOpen,
        infoPanelIsOpen: state.infoPanelIsOpen,
        tracker: state.tracker,
        selection: state.selection
      });
    case HOVER_TRACKER_TIMELINE:
      return Object.assign({}, state, {
        filterPanelIsOpen: !state.filterPanelIsOpen,
        infoPanelIsOpen: state.infoPanelIsOpen,
        tracker: state.tracker,
        selection: action.payload
      });
    case CLICK_TRACKER_TIMELINE:
      return Object.assign({}, state, {
        filterPanelIsOpen: !state.filterPanelIsOpen,
        infoPanelIsOpen: state.infoPanelIsOpen,
        tracker: state.tracker,
        selection: action.payload
      });
    default:
      return state;
  }
}
