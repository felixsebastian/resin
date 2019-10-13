import store from "./store";
import actions from "../actions";

let keyDown = null,
  keyUp = null;

export default {
  start: () => {
    keyDown = window.addEventListener(
      "keydown",
      e => store.dispatch(actions.keyDown(e.key)),
      false
    );
    keyUp = window.addEventListener(
      "keyup",
      e => store.dispatch(actions.keyUp(e.key)),
      false
    );
  },
  stop: () => {
    window.removeEventListener(keyDown);
    window.removeEventListener(keyUp);
  }
};
