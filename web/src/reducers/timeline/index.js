import { combineReducers } from "redux";
import channels from "./channels";
import ready from "./ready";
import range from "./range";
import tracker from "./tracker";

export default combineReducers({ channels, ready, range, tracker });
