import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Table from "../Table";
import time from "../../lib/views/time";

const INCIDENTS = gql`
  {
    incidents {
      timestamp
      latitude
      longitude
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
      <>
        lat: {incident.latitude}
        <br />
        lon: {incident.longitude}
      </>,
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
