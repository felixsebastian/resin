import React from "react";
import sources from "../../../lib/incidentSources";
import { useSelector } from "react-redux";
import filterTypes from "../../../lib/filterTypes";

export default props => {
  const filter = useSelector(state => state.filters[props.index]);

  return (
    <>
      Min:
      <input
        type="number"
        onChange={e =>
          props.onChange([
            parseFloat(e.target.value),
            filter.value ? filter.value[1] : 0
          ])
        }
      />
      Max:
      <input
        type="number"
        onChange={e =>
          props.onChange([
            filter.value ? filter.value[0] : 0,
            parseFloat(e.target.value)
          ])
        }
      />
    </>
  );
};
