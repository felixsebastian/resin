import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Table from "../Table";
import moment from "moment";

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
      weatherDesc
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
      moment
        .unix(incident.timestamp)
        .format("MMMM Do YYYY, h:mm:ss a")
        .toString(),
      <>
        lat: {incident.latitude}
        <br />
        lon: {incident.longitude}
      </>,
      incident.numVehicles,
      incident.damageSeverity,
      incident.description,
      incident.dca,
      incident.weatherDesc,
      <>delete</>
    ]);
  });

  return (
    <Table
      title="Incidents"
      headings={[
        "Time",
        "Location",
        "# of Vehicles",
        "Carnage Level",
        "Notes",
        "DCA",
        "Weather Conditions",
        "Actions"
      ]}
      rows={tableRows}
    />
  );
};
