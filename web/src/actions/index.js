import logIn from "./logIn";
import createAction from "../lib/createAction";

export default {
  logIn,
  ...[
    { id: "keyDown", type: "KEY_DOWN", payload: ["key"] },
    { id: "KeyUp", type: "KEY_UP", payload: ["key"] },
    { id: "selectIncident", type: "SELECT_INCIDENT", payload: ["selection"] },
    { id: "selectIncident", type: "SELECT_INCIDENT", payload: ["selection"] },
    {
      id: "addIncidentToSelection",
      type: "ADD_INCIDENT_TO_SELECTION",
      payload: ["selection"]
    },
    { id: "moveTracker", type: "MOVE_TRACKER", payload: ["tracker"] },
    {
      id: "changeTimeRange",
      type: "CHANGE_TIME_RANGE",
      payload: ["timeRange"]
    },
    {
      id: "toggleFilterFieldClicked",
      type: "TOGGLE_FILTER_FIELD_CLICKED",
      payload: ["field"]
    },
    { id: "selectSensor", type: "SELECT_SENSOR", payload: ["id"] },
    { id: "logOut", type: "LOG_OUT" }
  ].reduce((result, action) => {
    result[action.id] = createAction(action.type, action.payload);
    return result;
  }, {})
};
