import React from "react";
import ListDetail from "../ListDetail";
import Detail from "./Detail";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import connect from "../../lib/connect";

const SENSORS = gql`
  {
    sensors {
      type
    }
  }
`;

export default connect()(props => {
  const { loading, error, data } = useQuery(SENSORS);

  if (loading) return <p>...loading</p>;
  if (error) return <p>...error</p>;

  return (
    <ListDetail
      onItemClicked={props.actions.selectSensor}
      items={data.sensors.map(sensor => sensor.type)}
    >
      <Detail />
    </ListDetail>
  );
});
