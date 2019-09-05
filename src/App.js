import React from "react";
import Header from "./Header.js";
import Geo from "./Geo.js";
import Time from "./Time.js";
import { css } from "glamor";

// styles

const islandCss = css({
  border: "0.5rem solid #eee"
});

const appCss = css({
  display: "flex",
  "flex-direction": "column",
  height: "150vh",
  width: "1200px",
  "max-width": "100%",
  margin: "0 auto"
});

const headerCss = css({
  padding: "1rem 2rem",
  "border-bottom": 0
});

const viewportRowCss = css({
  display: "flex"
});

const geoCss = css({
  "border-bottom": 0
});

const timeCss = css({});

const viewportsFrameCss = css({
  display: "flex",
  "flex-direction": "column"
});

// component

export default function App() {
  return (
    <div className={appCss}>
      <Header classNameCss={`${headerCss} ${islandCss}`} />
      <div className={`${viewportsFrameCss}`} style={{ flexGrow: 1 }}>
        <Geo
          classNameCss={`${geoCss} ${islandCss} ${viewportRowCss}`}
          style={{ flexGrow: 1 }}
        />
        
        {/*<Time
          classNameCss={`${timeCss} ${islandCss} ${viewportRowCss}`}
          style={{ flexGrow: 1 }}
        />*/}
      </div>
    </div>
  );
}
