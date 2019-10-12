import selection from "./selection";
import user from "./user";
import timeline from "./timeline";
import filteringFields from "./filteringFields";
import sensor from "./sensor";
import { combineReducers } from "redux";

export default combineReducers({
  user,
  selection,
  timeline,
  filteringFields,
  sensor
});
