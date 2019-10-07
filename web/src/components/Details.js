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
import designConstants from "../lib/designConstants";

const data = {
  make: "mitsubishi",
  model: "bolt",
  time: "10:15am"
};

const Layout = styled(Viewport)`
  flex-grow: 1;
`;

const Action = styled.span`
  cursor: pointer;
  text-decoration: underline;
  color: ${designConstants.linkColor};
`;

export default connect(state => ({
  isSelectionPresent: !!state.selection.length,
  filteringFields: state.filteringFields
}))(({ isSelectionPresent, actions, filteringFields }) => (
  <Layout>
    <StructuredListWrapper>
      <StructuredListHead>
        <StructuredListCell head style={{ width: "20%" }}>
          Key
        </StructuredListCell>
        <StructuredListCell head>Value</StructuredListCell>
        <StructuredListCell head style={{ width: "20%" }}>
          Filter
        </StructuredListCell>
      </StructuredListHead>
      <StructuredListBody>
        {Object.keys(data).map(key => (
          <StructuredListRow key={key}>
            <StructuredListCell>{key}:</StructuredListCell>
            <StructuredListCell>
              <b>{data[key]}</b>
            </StructuredListCell>
            <StructuredListCell>
              {isSelectionPresent && <Action>p</Action>}{" "}
              <Action
                onClick={actions.toggleFilterFieldClicked}
                data-field={key}
              >
                {!filteringFields.includes(key) ? "add" : "remove"}
              </Action>
            </StructuredListCell>
          </StructuredListRow>
        ))}
      </StructuredListBody>
    </StructuredListWrapper>
  </Layout>
));
