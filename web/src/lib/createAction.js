import types from "../lib/actionTypes";

export default (type, theArguments) => (...args) => ({
  type: types[type],
  payload:
    theArguments &&
    theArguments.reduce((result, next, index) => {
      result[next] = args[index];
      return result;
    }, {})
});
