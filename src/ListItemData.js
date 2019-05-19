import React from "react";
import { css } from "glamor";

const dataListItemCss = css({
  height: "3rem",
  padding: "0 1rem",
  "border-bottom": "1px solid #eee",
  display: "flex",
  "flex-direction": "row",
  "align-items": "center"
});

export default function ListItemData({ text }) {
  return (
    <div className={dataListItemCss}>
      <input type="checkbox" />
      <input type="checkbox" />
      &nbsp;
      {text}
    </div>
  );
}
