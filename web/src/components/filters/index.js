import React from "react";
import Button from "../Button";
import Flyout from "../flyout";
import sources from "../../lib/incidentSources";
import Fields from "./Fields";
import PaddingRight from "../PaddingRight";
import { useSelector } from "react-redux";
import useActions from "../../hooks/useActions";

export default () => {
  const filters = useSelector(state => state.filters);
  const { addFilter, clearFilters } = useActions();

  return (
    <>
      <Fields />
      <PaddingRight>
        <Flyout
          optionSelected={addFilter}
          options={Object.keys(sources.incident.fields).map(id => ({
            id,
            text: sources.incident.fields[id].label
          }))}
        >
          Add filter
        </Flyout>
      </PaddingRight>
      {filters.length > 0 && <Button onClick={clearFilters}>Clear</Button>}
    </>
  );
};
