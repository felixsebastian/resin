import React from "react";
import List from "./List";
import ListItemData from "./ListItemData";
import ListItemValue from "./ListItemValue";
import { css } from "glamor";

import {slide as Menu} from "react-burger-menu";
import store from "./Store";

const filterPanelCss = css({
  display: "flex",
  "flex-direction": "row"
});

var isMenuOpen = function(state) {
  return state.isOpen;
}

export default function FilterPanel({ items }) {
  return (
    <div className={filterPanelCss}>
      <Menu
        isOpen={false}
        onStateChange={isMenuOpen}
      >
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
    </div>
  );
}
