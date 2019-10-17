import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Table from "../Table";

const VEHICLES = gql`
  {
    vehicles {
      type
      registration
      vin
      make
      model
      oem
      yearOfManufacture
      autonomyLevel
      sensors {
        type
      }
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(VEHICLES, { pollInterval: 500 });
  if (loading) return <p>loading...</p>;
  if (error) return <p>error!</p>;
  const tableRows = [];

  data.vehicles.forEach(vehicle => {
    tableRows.push([
      vehicle.type,
      vehicle.registration,
      vehicle.vin,
      vehicle.make,
      vehicle.model,
      vehicle.oem,
      vehicle.yearOfManufacture,
      //vehicle.countryOfManufacture,
      vehicle.autonomyLevel,
      vehicle.sensors ? vehicle.sensors.join(", ") : "",
      <>delete</>
    ]);
  });

  return (
    <Table
      title="Incidents"
      headings={[
        "Type",
        "Reg #",
        "VIN #",
        "Make",
        "Model",
        "OEM",
        "Year",
        //"Country",
        "Autonomy Level",
        "Sensors",
        "Actions"
      ]}
      rows={tableRows}
    />
  );
};
