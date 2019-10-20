import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Table from "../Table";
import time from "../../lib/views/time";
import location from "../../lib/views/location";

const INCIDENTS = gql`
  {
    incidents {
      timestamp
      location {
        latitude
        longitude
      }
      numVehicles
      damageSeverity
      description
      dca
      mode
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(INCIDENTS);
  if (loading) return <p>loading...</p>;
  if (error) return <p>error!</p>;

  const tableRows = [];

  data.incidents.forEach(incident => {
    tableRows.push([
      time(incident.timestamp),
      location(incident.location),
      incident.numVehicles,
      incident.damageSeverity,
      incident.description,
      incident.dca,
      incident.mode,
      <>delete</>
    ]);
  });

  return (
    <Table
      title="Incidents"
      headings={[
        "Time",
        "Location",
        "Vehicle count",
        "Damage",
        "Notes",
        "DCA",
        "Mode",
        "Actions"
      ]}
      rows={tableRows}
    />
  );
};
