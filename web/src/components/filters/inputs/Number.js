import React from "react";
import sources from "../../../lib/incidentSources";
import { useSelector } from "react-redux";
import filterTypes from "../../../lib/filterTypes";

export default props => {
  const filter = useSelector(state => state.filters[props.index]);

  return (
    <input
      type="number"
      onChange={e => props.onChange(parseFloat(e.target.value))}
      placeholder={
        sources.incident.fields[filter.field].label +
        " " +
        filterTypes[sources.incident.fields[filter.field].type][filter.type]
          .text
      }
    />
  );
};
