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
import Hint from "./Hint";
import Centered from "./layouts/Centered";
import Padding from "./Padding";
import sources from "../lib/incidentSources";

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
      weatherDesc
      vehicle1 {
        vin
        type
        registration
        make
        model
        yearOfManufacture
        countryOfManufacture
        autonomyLevel
        sensors {
          type
        }
      }
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

  const dataSelected = data.incidents.filter(incident =>
    selection.includes(incident.id)
  );

  return (
    <Box>
      {selection.length > 0 ? (
        Object.keys(sources).map(sourceId => {
          const source = sources[sourceId];
          const fields = source.fields;

          return (
            <>
              <Padding>
                <h4>{source.heading}</h4>
              </Padding>
              <StructuredListWrapper style={{ margin: 0 }}>
                <StructuredListBody>
                  <StructuredListHead>
                    <StructuredListCell head style={{ width: "30%" }}>
                      Key
                    </StructuredListCell>
                    <StructuredListCell head>Value</StructuredListCell>
                    <StructuredListCell head style={{ width: "25%" }}>
                      Actions
                    </StructuredListCell>
                  </StructuredListHead>
                  {Object.keys(fields).map(fieldId => {
                    const field = fields[fieldId];

                    let fieldData =
                      sourceId === "incident"
                        ? dataSelected
                        : dataSelected
                            .filter(incident => incident.vehicles[0])
                            .map(incident => incident.vehicles[0]);

                    return (
                      <StructuredListRow key={fieldId}>
                        <StructuredListCell>{field.label}:</StructuredListCell>
                        <StructuredListCell>
                          <b>
                            {fieldData
                              .map(record =>
                                field.view
                                  ? field.view(record[fieldId])
                                  : record[fieldId]
                              )
                              .join(", ")}
                          </b>
                        </StructuredListCell>
                        <StructuredListCell>
                          {isSelectionPresent && false && <Button>p</Button>}{" "}
                        </StructuredListCell>
                      </StructuredListRow>
                    );
                  })}
                </StructuredListBody>
              </StructuredListWrapper>
            </>
          );
        })
      ) : (
        <Centered offset={10}>
          <Hint>Select an incident to view details about it</Hint>
        </Centered>
      )}
    </Box>
  );
});
