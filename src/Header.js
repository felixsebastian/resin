import React from "react";
import { css } from "glamor";

const headingCss = css({
  margin: 0
});

export default function Header({ classNameCss }) {
  return (
    <header className={classNameCss}>
      <h1 className={headingCss}>Resin</h1>
    </header>
  );
}
