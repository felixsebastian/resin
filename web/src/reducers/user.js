import actionTypes from "../lib/actionTypes";

const { LOGGED_IN } = actionTypes;

export default (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGGED_IN:
      return payload;
    default:
      return state;
  }
};
