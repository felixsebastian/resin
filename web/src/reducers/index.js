import selection from "./selection";
import timeline from "./timeline";
import filteringFields from "./filteringFields";
import { combineReducers } from "redux";

export default combineReducers({ selection, timeline, filteringFields });
