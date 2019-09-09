import React from "react";
import Geo from "./Geo.js";
import Time from "./Time.js";
import { css } from "glamor";
import {
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListInput,
  StructuredListCell
} from "carbon-components-react";

export const islandCss = css({
  margin: "0.25rem",
  "box-shadow": "0.1rem 0.1rem 0.05rem rgba(0,0,0,0.3)",
  "border-radius": "0.2rem",
  "background-color": "#fff"
});

const appCss = css({
  display: "flex",
  flexGrow: 1,
  height: "100%",
  "flex-direction": "row",
  width: "100%",
  "max-width": "100%",
  margin: "0 auto",
  padding: "0.25rem",
  "box-sizing": "border-box"
});

const viewportRowCss = css({
  display: "flex"
});

const geoCss = css({
  "margin-bottom": 0
});

const timeCss = css({
  height: "40vh"
});

const detailsCss = css({
  width: "20rem"
});

const viewportsFrameCss = css({
  display: "flex",
  "flex-direction": "column",
  height: "100%"
});

export default () => (
  <div className={`${appCss}`}>
    <div className={`${viewportsFrameCss}`} style={{ flexGrow: 1 }}>
      <Geo
        classNameCss={`${geoCss} ${viewportRowCss}`}
        style={{ flexGrow: 1 }}
      />
      <Time classNameCss={`${timeCss} ${viewportRowCss}`} />
    </div>
    <div className={`${detailsCss} ${islandCss}`}>
      <StructuredListWrapper>
        <StructuredListHead>
          <StructuredListCell head style={{ width: "33%" }}>
            Key
          </StructuredListCell>
          <StructuredListCell head>Value</StructuredListCell>
        </StructuredListHead>
        <StructuredListBody>
          <StructuredListRow>
            <StructuredListCell>make:</StructuredListCell>
            <StructuredListCell>
              <b>ford</b>
            </StructuredListCell>
          </StructuredListRow>
        </StructuredListBody>
      </StructuredListWrapper>
    </div>
  </div>
);
