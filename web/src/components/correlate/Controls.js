import React from "react";
import { useSelector } from "react-redux";
import Padding from "../Padding";
import useActions from "../../hooks/useActions";
import InlineSpacer from "../InlineSpacer";
import sources from "../../lib/incidentSources";

const random = "ChRQ7tAvWIDIj7qFbAui";

const fields = ["numVehicles", "speedLimit", "damageSeverity", "mode", "dca"];

export default () => {
  const independant = useSelector(state => state.independant);
  const stepSize = useSelector(state => state.stepSize);
  const { changeIndependant, changeStepSize } = useActions();

  const field =
    fields[Object.keys(fields).find(field => field === independant)];

  return (
    <Padding>
      <select
        value={independant || random}
        onChange={e => changeIndependant(e.target.value)}
      >
        <option disabled value={random}>
          Select One
        </option>
        {Object.keys(fields).map(field => (
          <option value={field} key={field}>
            {sources.incident[field].label}
          </option>
        ))}
      </select>
      {field && field.continuous && (
        <>
          <InlineSpacer />
          <label>
            Step size:{" "}
            <input
              type="number"
              value={stepSize}
              onChange={e => changeStepSize(parseInt(e.target.value, 10))}
            />
          </label>
        </>
      )}
    </Padding>
  );
};
