import { combineReducers } from "redux";
import channels from "./channels";
import ready from "./ready";
import timeRange from "./timeRange";
import tracker from "./tracker";

export default combineReducers({ channels, ready, timeRange, tracker });
