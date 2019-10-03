import React from "react";
import List from "./List";
import ListItemData from "./ListItemData";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";

const Layout = styled.div`
  display: flex;
  flex-direction: row;
`;

var isMenuOpen = function(state) {
  return state.isOpen;
};

export default function FilterPanel({ items }) {
  return (
    <Layout>
      <Menu isOpen={false} onStateChange={isMenuOpen}>
        <main>
          <List>
            {items.map(item => (
              <ListItemData text={item.label} />
            ))}
          </List>
          {/* <List>
            items.map(item => (
              <ListItemValue text={item.value} />
            ))
          </List> */}
        </main>
      </Menu>
    </Layout>
  );
}
