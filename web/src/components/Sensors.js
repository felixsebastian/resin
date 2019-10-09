import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Viewport from "./Viewport";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Box = styled(Viewport)`
  overflow-y: auto;
  flex-grow: 1;
`;

const Item = styled.div`
  padding: 1rem;
`;

const SENSORS = gql`
  {
    sensors {
      type
      description
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(SENSORS);

  if (loading) return <p>...loading</p>;
  if (error) return <p>...error</p>;

  return (
    <Container>
      <Box>
        {data.sensors.map(sensor => (
          <Item>
            <h4>{sensor.type}</h4>
            <p>{sensor.description}</p>
          </Item>
        ))}
      </Box>
    </Container>
  );
};
