// import logOut from "./logOut";

const operations = {};

export default Object.keys(operations).reduce((result, key) => {
  result[key] = (...args) => dispatch =>
    operations[key](...args).then((type, payload) =>
      dispatch({
        type,
        payload
      })
    );

  return result;
}, {});
