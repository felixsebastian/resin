import React from "react";
import styled from "styled-components";
import Viewport from "./Viewport";
import ListItemData from "./ListItemData";

const Layout = styled.div`
  width: 20rem;
`;

export default function List({ items }) {
  return (
    <Viewport>
      <Layout>
        {items.map(item => (
          <ListItemData text={item.label} />
        ))}
      </Layout>
    </Viewport>
  );
}
