import React from "react";
import sources from "../../../lib/incidentSources";
import { useSelector } from "react-redux";
import filterTypes from "../../../lib/filterTypes";
import { createSelector } from "reselect";

const selectFilters = createSelector(state => state.filters);

export default props => {
  const filters = useSelector(selectFilters);
  const type = filters.find(filter => filter.field === props.field).type;

  console.log(type);
  console.log(props.field.type);
  console.log(sources.incident.fields[props.field.type]);
  console.log(filterTypes[sources.incident.fields[props.field.type]]);
  console.log(filterTypes[sources.incident.fields[props.field.type]][type]);

  return (
    <input
      onChange={e => props.onChange(e.target.value)}
      placeholder={
        sources.incident.fields[props.field].label +
        " " +
        filterTypes[sources.incident.fields[props.field.type]][type].text
      }
    />
  );
};
