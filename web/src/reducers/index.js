import selection from "./selection";
import user from "./user";
import timeline from "./timeline";
import filteringFields from "./filteringFields";
import keysDown from "./keysDown";
import { combineReducers } from "redux";

export default combineReducers({
  user,
  selection,
  timeline,
  filteringFields,
  keysDown
});
