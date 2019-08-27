import React from "react";
import List from "./List";
import ListItemData from "./ListItemData";
import ListItemValue from "./ListItemValue";
import { css } from "glamor";

const dataPanelCss = css({
  display: "flex",
  "flex-direction": "row"
});

export default function DataPanel({ items }) {
  return (
    <div className={dataPanelCss}>
      <List>
        {items.map(item => (
          <ListItemData text={item.label} />
        ))}
      </List>
      <List>
        {/*items.map(item => (
          <ListItemValue text={item.value} />
        ))*/}
      </List>
    </div>
  );
}
