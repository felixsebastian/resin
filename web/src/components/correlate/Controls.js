import React from "react";
import { useSelector } from "react-redux";
import Padding from "../Padding";
import useActions from "../../hooks/useActions";
import InlineSpacer from "../InlineSpacer";
import sources from "../../lib/incidentSources";
const random = "ChRQ7tAvWIDIj7qFbAui";
const fields = ["numVehicles", "speedLimit", "damageSeverity", "mode", "dca"];
const continuousFields = ["numVehicles", "speedLimit"];

export default () => {
  const independant = useSelector(state => state.independant);
  const stepSize = useSelector(state => state.stepSize);
  const { changeIndependant, changeStepSize } = useActions();
  const field = fields[fields.findIndex(field => field === independant)];

  return (
    <Padding>
      <select
        value={independant || random}
        onChange={e => changeIndependant(e.target.value)}
      >
        <option disabled value={random}>
          Select One
        </option>
        {fields.map(field => (
          <option value={field} key={field}>
            {sources.incident.fields[field].label}
          </option>
        ))}
      </select>
      {field && continuousFields.includes(field) && (
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
