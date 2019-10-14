import React from "react";
import ListDetail from "../ListDetail";
import Padding from "../Padding";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import connect from "../../lib/connect";

const SENSORS = gql`
  {
    sensors {
      type
      description
    }
  }
`;

export default connect(state => ({ sensor: state.sensor }))(props => {
  const { loading, error, data } = useQuery(SENSORS);

  if (loading) return <p>...loading</p>;
  if (error) return <p>...error</p>;

  const selectedSensor = data.sensors.find(
    sensor => sensor.type === props.sensor
  );

  return (
    <ListDetail
      onItemClicked={props.actions.selectSensor}
      items={data.sensors.map(sensor => sensor.type)}
    >
      <Padding>
        <p>{selectedSensor && selectedSensor.description}</p>
      </Padding>
    </ListDetail>
  );
});
