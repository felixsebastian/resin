import React from "react";
import List from "./List";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export default function DataPanel({ items }) {
  return (
    <Layout>
      <List items={items} />
    </Layout>
  );
}
