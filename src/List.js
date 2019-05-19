import React from "react";
import { css } from "glamor";

const dataListCss = css({
  width: "15rem",
  height: "100%",
  "border-right": "0.5rem solid #eee"
});

export default function List({ children }) {
  return <div className={dataListCss}>{children}</div>;
}
