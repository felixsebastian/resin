import types from "../lib/actionTypes";
import cookie from "js-cookie";

export default (token, username) => {
  const user = { token, username };
  cookie.set("user", user);

  return {
    type: types.LOG_IN,
    payload: user
  };
};
