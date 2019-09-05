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

const islandCss = css({
  margin: "0.5rem",
  "box-shadow": "0.1rem 0.1rem 0.2rem rgba(0,0,0,0.2)",
  "border-radius": "0.2rem"
});

const appCss = css({
  display: "flex",
  flexGrow: 1,
  height: "100%",
  "flex-direction": "row",
  width: "100%",
  "max-width": "100%",
  margin: "0 auto"
});

const viewportRowCss = css({
  display: "flex"
});

const geoCss = css({
  "border-bottom": 0
});

const timeCss = css({});

const detailsCss = css({
  width: "30rem"
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
        classNameCss={`${geoCss} ${islandCss} ${viewportRowCss}`}
        style={{ flexGrow: 1 }}
      />
      <Time
        classNameCss={`${timeCss} ${islandCss} ${viewportRowCss}`}
        style={{ flexGrow: 1 }}
      />
    </div>
    <div className={`${detailsCss}`}>
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
