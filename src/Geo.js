import React from "react";
import DataPanel from "./DataPanel";
import Map from "./Map";
import { css } from "glamor";
import { geo } from "./data";

// styles

const dataPanelCss = css({});

const mapCss = css({ overflow: "hidden", position: "static" });

export default function Geo({ classNameCss, style }) {
  return (
    <div className={classNameCss} style={style}>
      <DataPanel
        className={dataPanelCss}
        items={geo}
      />
      <Map classNameCss={mapCss} style={{ flexGrow: 1 }} />
    </div>
  );
}
