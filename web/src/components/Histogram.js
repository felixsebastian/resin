import React from "react";
import Viewport from "./Viewport";
import styled from "styled-components";
import Centered from "./layouts/Centered";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from "recharts";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
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
      oem
      yearOfManufacture
      autonomyLevel
      sensors {
        type
      }
    }
  }
}
`;


// X axis - Weather? (intervals)
// Y axis - range of applied filters based on the temperature?


const graphData = [
  {
    name: "Google",
    incidents: 10,
  },
  {
    name: "Delphi",
    incidents: 1
  },
  {
    name: "Nissan",
    incidents: 3
  },
  {
    name:"Tesla",
    incidents: 13
  },
  {
    name:"General Motors",
    incidents: 10
  }
];

const Box = styled(Viewport)`
  width: 100%;
`;

export default () => {
  const { loading, error, data } = useQuery(INCIDENTS);

  if (loading) return (<Box>loading...</Box>);
  if (error) return (<Box>error!</Box>);

  //console.log(data.incidents[0].vehicles[0].oem);
/*
  var oemMap = new Map();
  for(var incident in data.incidents) {
    if (oemMap.has(incident.vehicles[0].oem)) {
      oemMap.set(incident.vehicles[0].oem, oemMap.get(incident.vehicles[0].oem) + 1);
    }
    else {
      oemMap.set(incident.vehicles[0].oem, 1);
    }
  }
  
 for(var incident in data.incidents) {
   console.log(incident.vehicles[0].oem);
 }
 */
  return (
  <Box>
    <Centered offset={0}>
      <BarChart width={600} height={600} data={graphData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="incidents" fill="#8884d8" />
      </BarChart>
    </Centered>
  </Box>
  )
};
