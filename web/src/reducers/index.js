import selection from "./selection";
import user from "./user";
import timeline from "./timeline";
import filters from "./filters";
import keysDown from "./keysDown";
import sensor from "./sensor";
import { combineReducers } from "redux";

export default combineReducers({
  user,
  selection,
  timeline,
  filters,
  keysDown,
  sensor
});
