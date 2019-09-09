import React from "react";
import DataListItem from "./DataListItem";
import { css } from "glamor";

const dataListCss = css({
  width: "15rem",
  height: "100%",
  "border-right": "0.5rem solid #eee"
});

export default function DataLayerList() {
  return (
    <div className={dataListCss}>
      <DataLayerListItem name="test" />
      <DataListItem name="test" />
      <DataListItem name="test" />
    </div>
  );
}
