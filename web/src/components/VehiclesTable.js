import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Table from "./Table";

const VEHICLES = gql`
  {
    vehicles {
      type
      registration
      vin
      make
      model
      yearOfManufacture
      countryOfManufacture
      autonomyLevel
      sensors
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(VEHICLES);

  const tableRows = [];

  if (!loading)
    data.vehicles.forEach(vehicle => {
      tableRows.push([
        vehicle.type,
        vehicle.registration,
        vehicle.vin,
        vehicle.make,
        vehicle.model,
        vehicle.yearOfManufacture,
        vehicle.countryOfManufacture,
        vehicle.autonomyLevel,
        vehicle.sensors,
        <>delete</>
      ]);
    });

  if (loading) return <p>loading...</p>;
  if (error) return <p>error!</p>;

  return (
    <Table
      title="Incidents"
      headings={[
        "Type",
        "Reg #",
        "VIN #",
        "Make",
        "Model",
        "Year",
        "Country",
        "Autonomy Level",
        "Sensors",
        "Actions"
      ]}
      rows={tableRows}
    />
  );
};
