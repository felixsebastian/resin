import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useSelector } from "react-redux";
import serializeFilters from "../../lib/serializeFilters";

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer
} from "recharts";

const Box = styled.div`
  padding: 1rem 4rem 1rem 1rem;
  height: 100%;
  width: 100%;
`;

const CORRELATE = gql`
  query correlate($filters: [FilterInput], $options: ChartOptionsInput) {
    correlate(filters: $filters, options: $options) {
      label
      data
    }
  }
`;

const Main = () => {
  const independant = useSelector(state => state.independant);
  const stepSize = useSelector(state => state.stepSize);

  const { loading, error, data } = useQuery(CORRELATE, {
    variables: {
      filters: serializeFilters(useSelector(state => state.filters)),
      options: {
        field: independant,
        step: stepSize
      }
    }
  });

  const correlate = data ? data.correlate : null;

  if (loading) return <p>loading...</p>;
  if (independant && error) return <p>error!</p>;

  console.log(correlate);

  if (!independant) return "Please select a field to correlate";
  else if (!correlate || !Object.keys(correlate).length)
    return "No data to show";
  else
    return (
      <ResponsiveContainer>
        <BarChart width={600} height={600} data={correlate}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis dataKey="data" />
          <Tooltip />
          <Bar dataKey="data" fill="#8d0dff" />
        </BarChart>
      </ResponsiveContainer>
    );
};

export default () => (
  <Box>
    <Main />
  </Box>
);
