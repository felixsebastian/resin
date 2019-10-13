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
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Button from "./Button";

const fields = [
  "id",
  "timestamp",
  "latitude",
  "longitude",
  "numVehicles",
  "damageSeverity",
  "description",
  "dca",
  "weatherDesc"
];

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

const Box = styled(Viewport)`
  flex-grow: 1;
`;

export default connect(state => ({
  isSelectionPresent: !!state.selection.length,
  filteringFields: state.filteringFields,
  selection: state.selection
}))(({ isSelectionPresent, actions, selection }) => {
  const { loading, error, data } = useQuery(INCIDENTS);
  if (loading) return <p>loading...</p>;
  if (error) return <p>error!</p>;

  return (
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
          {fields.map(field => (
            <StructuredListRow key={field}>
              <StructuredListCell>{field}:</StructuredListCell>
              <StructuredListCell>
                <b>
                  {data.incidents
                    .filter(incident => selection.includes(incident.id))
                    .map(incident => incident[field])
                    .join(", ")}
                </b>
              </StructuredListCell>
              <StructuredListCell>
                {isSelectionPresent && <Button>p</Button>}{" "}
                <input
                  type="checkbox"
                  name={field}
                  data-field={field}
                  onChange={actions.toggleFilterFieldClicked}
                />
              </StructuredListCell>
            </StructuredListRow>
          ))}
        </StructuredListBody>
      </StructuredListWrapper>
    </Box>
  );
});
