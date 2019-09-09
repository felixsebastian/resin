import React from "react";
import DataPanel from "./DataPanel";
import Map from "./Map";
import { css } from "glamor";
import { geo } from "../data/dummy";

// styles

const dataPanelCss = css({});

const mapCss = css({ overflow: "hidden", position: "static" });

export default function Geo({ classNameCss, style }) {
  return (
    <div className={classNameCss} style={style}>
<<<<<<< HEAD:web/src/views/Geo.js
      <DataPanel className={dataPanelCss} items={geo} />
=======
      {/*
      <DataPanel
        className={dataPanelCss}
        items={geo}
      />
      */}
>>>>>>> Attempted to implement multiple markers and marker generation:src/Geo.js
      <Map classNameCss={mapCss} style={{ flexGrow: 1 }} />
    </div>
  );
}
