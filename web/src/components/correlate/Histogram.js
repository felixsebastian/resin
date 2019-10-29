import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer
} from "recharts";

const Box = styled.div`
  padding: 1rem;
  height: 100%;
  width: 100%;
`;

const data = [
  {
    name: "Page A",
    model: 4000,
    amt: 2400
  },
  {
    name: "Page B",
    model: 3000,
    amt: 2210
  },
  {
    name: "Page C",
    model: 2000,
    amt: 2290
  },
  {
    name: "Page D",
    model: 2780,
    amt: 2000
  },
  {
    name: "Page E",
    model: 1890,
    amt: 2181
  },
  {
    name: "Page F",
    model: 2390,
    amt: 2500
  },
  {
    name: "Page G",
    model: 3490,
    amt: 2100
  }
];

export default () => {
  const correlateIndependant = useSelector(state => state.correlateIndependant);

  return (
    <Box>
      {!correlateIndependant ? (
        "Please select a field to correlate"
      ) : (
        <ResponsiveContainer>
          <BarChart width={600} height={600} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="amt" />
            <Tooltip />
            <Legend />
            <Bar dataKey="model" fill="#8d0dff" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </Box>
  );
};
