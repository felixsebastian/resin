import logIn from "./logIn";
import createAction from "../lib/createAction";

export default {
  logIn,
  ...[
    { type: "KEY_DOWN", payload: ["key"] },
    { type: "KEY_UP", payload: ["key"] },
    {
      type: "TOGGLE_SELECTION_IS_INCIDENT",
      payload: ["id"]
    },
    {
      type: "TOGGLE_INCIDENT_INCLUDED_IN_SELECTION",
      payload: ["id"]
    },
    { type: "CLEAR_SELECTION" },
    { type: "MOVE_TRACKER", payload: ["tracker"] },
    {
      type: "CHANGE_TIME_RANGE",
      payload: ["timeRange"]
    },
    {
      type: "TOGGLE_FILTER_FIELD_CLICKED",
      payload: ["field"]
    },
    { type: "SELECT_SENSOR", payload: ["id"] },
    { type: "LOG_OUT" }
  ].reduce((result, action) => {
    result[
      action.type
        .split("_")
        .map((term, i) =>
          i === 0
            ? term.toLowerCase()
            : term.charAt(0) + term.toLowerCase().substring(1)
        )
        .join("")
    ] = createAction(action.type, action.payload);
    return result;
  }, {})
};
