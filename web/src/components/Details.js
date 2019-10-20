import React from "react";
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell
} from "carbon-components-react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Hint from "./Hint";
import Centered from "./layouts/Centered";
import Padding from "./Padding";
import sources from "../lib/incidentSources";
import { useSelector } from "react-redux";

const INCIDENTS = gql`
  {
    incidents {
      id
      timestamp
      location {
        latitude
        longitude
      }
      numVehicles
      damageSeverity
      description
      dca
      vehicles {
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

export default () => {
  const selection = useSelector(state => state.selection);
  const { loading, error, data } = useQuery(INCIDENTS);
  if (loading) return <Padding>loading...</Padding>;
  if (error) return <Padding>error!</Padding>;

  const dataSelected = data.incidents.filter(incident =>
    selection.includes(incident.id)
  );

  return selection.length === 0 ? (
    <Centered offset={10}>
      <Hint>Select an incident to view details about it</Hint>
    </Centered>
  ) : (
    Object.keys(sources)
      .filter(sourceId => sourceId === "incident")
      .map(sourceId => {
        const source = sources[sourceId];
        const fields = source.fields;

        return (
          <>
            <Padding>
              <h4>{source.heading}</h4>
            </Padding>
            <StructuredListWrapper style={{ margin: 0 }}>
              <StructuredListHead>
                <StructuredListRow>
                  <StructuredListCell head style={{ width: "30%" }}>
                    Key
                  </StructuredListCell>
                  <StructuredListCell head>Value</StructuredListCell>
                </StructuredListRow>
              </StructuredListHead>
              <StructuredListBody>
                {Object.keys(fields)
                  .filter(fieldId => !fields[fieldId].hide)
                  .map(fieldId => {
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
                      </StructuredListRow>
                    );
                  })}
              </StructuredListBody>
            </StructuredListWrapper>
          </>
        );
      })
  );
};
