import React from "react";
import Viewport from "../Viewport";
import connect from "../../lib/connect";
import styled from "styled-components";
import Button from "../Button";
import Flyout from "../flyout";
import sources from "../../lib/incidentSources";
import Fields from "./Fields";
import PaddingRight from "../PaddingRight";

const Box = styled(Viewport)`
  padding: 1rem;
  overflow: visible;
`;

export default connect(state => ({
  filters: state.filters
}))(({ filters, actions }) => (
  <Box>
    <Fields />
    <PaddingRight>
      <Flyout
        optionSelected={id => actions.addFilter(id)}
        options={Object.keys(sources.incident.fields).map(id => ({
          id,
          text: sources.incident.fields[id].label
        }))}
      >
        Add filter
      </Flyout>
    </PaddingRight>
    {filters.length > 0 && (
      <Button onClick={actions.clearFilters}>Clear</Button>
    )}
  </Box>
));
