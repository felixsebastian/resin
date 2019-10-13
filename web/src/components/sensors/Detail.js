import React from "react";
import connect from "../../lib/connect";

export default connect(state => ({ sensor: state.sensor }))(({ sensor }) => (
  <p>{sensor}</p>
));
