import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  height: 3rem;
  padding: 0 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function ListItemData({ text }) {
  return (
    <Layout>
      <input type="checkbox" />
      <input type="checkbox" />
      &nbsp;
      {text}
    </Layout>
  );
}
