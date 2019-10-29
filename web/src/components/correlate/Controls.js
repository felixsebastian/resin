import React from "react";
import { useSelector } from "react-redux";
import Padding from "../Padding";
import useActions from "../../hooks/useActions";

const random = "ChRQ7tAvWIDIj7qFbAui";

export default () => {
  const correlateIndependant = useSelector(state => state.correlateIndependant);
  const { changeCorrelateIndependant } = useActions();

  console.log(correlateIndependant);

  return (
    <Padding>
      <select
        value={correlateIndependant || random}
        onChange={e => changeCorrelateIndependant(e.target.value)}
      >
        <option disabled value={random}>
          Select One
        </option>
        <option value={"b"}>b</option>
        <option value={"c"}>c</option>
      </select>
    </Padding>
  );
};
