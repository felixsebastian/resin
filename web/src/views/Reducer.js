import { CLICK_TOGGLE_PANEL } from "./Action";

const panelState = {
  panelIsOpen: false
};

export default function reducer (state = panelState, action) {
  switch (action.type) {
    case CLICK_TOGGLE_PANEL:
      return Object.assign({}, state, {
        briefIsOpen: state.briefIsOpen,
        panelIsOpen: !state.panelIsOpen
      });
    }
  return state;
}