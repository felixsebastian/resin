import React from "react";
import { css } from "glamor";
import { islandCss } from "./Dashboard";

const dataListCss = css({
  width: "15rem"
});

export default function List({ children }) {
  return <div className={`${dataListCss} ${islandCss}`}>{children}</div>;
}
