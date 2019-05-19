import React from "react";
import DataPanel from "./DataPanel";
import Map from "./Map";
import { css } from "glamor";

// styles

const dataPanelCss = css({});

const mapCss = css({ overflow: "hidden", position: "static" });

export default function Geo({ classNameCss, style }) {
  return (
    <div className={classNameCss} style={style}>
      <DataPanel
        className={dataPanelCss}
        items={[
          { name: "road seg type", value: "intersection" },
          { name: "terrain type", value: "built up" },
          { name: "road type", value: "normal" }
        ]}
      />
      <Map classNameCss={mapCss} style={{ flexGrow: 1 }} />
    </div>
  );
}
