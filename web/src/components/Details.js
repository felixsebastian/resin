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
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const INCIDENTS = gql`
  {
    incidents {
      id
      timestamp
      latitude
      longitude
      numVehicles
      damageSeverity
      description
      dca
      weatherDesc
    }
  }
`;

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
  filteringFields: state.filteringFields,
  incidents: state.selection
}))(({ isSelectionPresent, actions, filteringFields, incidents }) => {
  return (
    <Layout>
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
          {incidents.map(incident =>
            Object.keys(incident).map(key => (
              <StructuredListRow key={key}>
                <StructuredListCell>{key}:</StructuredListCell>
                <StructuredListCell>
                  <b>{incident[key]}</b>
                </StructuredListCell>
                <StructuredListCell>
                  {isSelectionPresent && <Action>p</Action>}{" "}
                  <input
                    type="checkbox"
                    name={key}
                    data-field={key}
                    onChange={actions.toggleFilterFieldClicked}
                  />
                </StructuredListCell>
              </StructuredListRow>
            ))
          )}
        </StructuredListBody>
      </StructuredListWrapper>
    </Layout>
  );
});
