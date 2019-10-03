import { connect } from "react-redux";
import * as actionCreators from "../lib/actionCreators";

export default (mapStateToProps = null) =>
  connect(
    mapStateToProps,
    dispatch => ({
      actions: Object.keys(actionCreators).reduce(
        (res, key) => ({
          ...res,
          [key]: function(...args) {
            dispatch(actionCreators[key](...args));
          }
        }),
        {}
      )
    })
  );
