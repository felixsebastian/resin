import React from "react";
import sources from "../../../lib/incidentSources";
import { useSelector } from "react-redux";
import filterTypes from "../../../lib/filterTypes";
const selectFilters = state => state.filters;

export default props => {
  const filters = useSelector(selectFilters);
  const filter = filters[props.index];
  const field = filter.field;
  const type = filter.type;

  console.log(field, type);

  return (
    <input
      onChange={e => props.onChange(e.target.value)}
      placeholder={
        sources.incident.fields[field].label +
        " " +
        filterTypes[sources.incident.fields[field].type][type].text
      }
    />
  );
};
