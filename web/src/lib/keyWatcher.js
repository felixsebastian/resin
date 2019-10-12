import store from "./store";
import actions from "../actions";

let keyup = null,
  keydown = null;

export default {
  start: () => {
    keyup = window.addEventListener(
      "keydown",
      e => store.dispatch(actions.keyDown(e.keyCode)),
      false
    );
    keydown = window.addEventListener(
      "keyup",
      e => store.dispatch(actions.keyUp(e.keyCode)),
      false
    );
  },
  stop: () => {
    window.removeEventListener(keyup);
    window.removeEventListener(keydown);
  }
};
