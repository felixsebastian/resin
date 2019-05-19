import React from "react";
import { css } from "glamor";

const timelineCss = css({
  overflow: "auto"
});

const itemCss = css({
  "background-color": "#ddd",
  height: "3rem",
  display: "block",
  width: 1000,
  "border-bottom": "1px solid #eee"
});

export default function Timeline({ items }) {
  return (
    <div className={timelineCss}>
      {items.map(item => (
        <img className={itemCss} src={item} alt="graph" />
      ))}
    </div>
  );
}
