import React from "react";
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell
} from "carbon-components-react";
import styled from "styled-components";
import Viewport from "./Viewport";
import connect from "../lib/connect";
import Button from "./Button";

const data = {
  make: "mitsubishi",
  model: "bolt",
  time: "10:15am"
};

const Box = styled(Viewport)`
  flex-grow: 1;
`;

export default connect(state => ({
  isSelectionPresent: !!state.selection.length,
  filteringFields: state.filteringFields
}))(({ isSelectionPresent, actions, filteringFields }) => (
  <Box>
    <StructuredListWrapper>
      <StructuredListHead>
        <StructuredListCell head style={{ width: "20%" }}>
          Key
        </StructuredListCell>
        <StructuredListCell head>Value</StructuredListCell>
        <StructuredListCell head style={{ width: "25%" }}>
          Filter
        </StructuredListCell>
      </StructuredListHead>
      <StructuredListBody>
        {Object.keys(data).map(field => (
          <StructuredListRow key={field}>
            <StructuredListCell>{field}:</StructuredListCell>
            <StructuredListCell>
              <b>{data[field]}</b>
            </StructuredListCell>
            <StructuredListCell>
              {isSelectionPresent && <Button>p</Button>}{" "}
              <Button onClick={() => actions.toggleFilterFieldClicked(field)}>
                {!filteringFields.includes(field) ? "add" : "remove"}
              </Button>
            </StructuredListCell>
          </StructuredListRow>
        ))}
      </StructuredListBody>
    </StructuredListWrapper>
  </Box>
));
