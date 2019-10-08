import types from "../lib/actionTypes";

export default () =>
  new Promise((resolve, reject) =>
    window.confirm("hi") ? resolve(types.LOG_OUT) : reject()
  );
