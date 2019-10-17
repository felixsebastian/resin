import React from "react";
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
  Toggle
} from "carbon-components-react";
import styled from "styled-components";
import Viewport from "./Viewport";
import connect from "../lib/connect";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Button from "./Button";
import Hint from "./Hint";
import Centered from "./layouts/Centered";

const fields = {
  timestamp: { canFilterBy: false, label: "Time" },
  latitude: { canFilterBy: false, label: "Latitude" },
  longitude: { canFilterBy: false, label: "Longitude" },
  numVehicles: { canFilterBy: true, label: "Vehicle count" },
  damageSeverity: { canFilterBy: true, label: "Damage" },
  description: { canFilterBy: true, label: "Notes" },
  dca: { canFilterBy: true, label: "DCA" }
};

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
    }
  }
`;

const Box = styled(Viewport)`
  flex-grow: 1;
`;

export default connect(state => ({
  isSelectionPresent: !!state.selection.length,
  filteringFields: state.filteringFields,
  selection: state.selection
}))(({ isSelectionPresent, actions, selection, filteringFields }) => {
  const { loading, error, data } = useQuery(INCIDENTS);
  if (loading) return <p>loading...</p>;
  if (error) return <p>error!</p>;

  return (
    <Box>
      {selection.length > 0 ? (
        <StructuredListWrapper>
          <StructuredListHead>
            <StructuredListCell head style={{ width: "30%" }}>
              Key
            </StructuredListCell>
            <StructuredListCell head>Value</StructuredListCell>
            <StructuredListCell head style={{ width: "25%" }}>
              Filter
            </StructuredListCell>
          </StructuredListHead>
          <StructuredListBody>
            {Object.keys(fields).map(id => (
              <StructuredListRow key={id}>
                <StructuredListCell>{fields[id].label}:</StructuredListCell>
                <StructuredListCell>
                  <b>
                    {data.incidents
                      .filter(incident => selection.includes(incident.id))
                      .map(incident => incident[id])
                      .join(", ")}
                  </b>
                </StructuredListCell>
                <StructuredListCell>
                  {isSelectionPresent && false && <Button>p</Button>}{" "}
                  {fields[id].canFilterBy && (
                    <Toggle
                      labelA={null}
                      labelB={null}
                      checked={filteringFields.includes(id)}
                      onChange={() => actions.toggleFilterFieldClicked(id)}
                    />
                  )}
                </StructuredListCell>
              </StructuredListRow>
            ))}
          </StructuredListBody>
        </StructuredListWrapper>
      ) : (
        <Centered offset={10}>
          <Hint>Select an incident to view details about it</Hint>
        </Centered>
      )}
    </Box>
  );
});
