import types from "../lib/actionTypes";
import cookie from "js-cookie";

export default (state = cookie.get("user") || null, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return action.payload;
    case types.LOG_OUT:
      cookie.remove("user");
      return null;
    default:
      return state;
  }
};
