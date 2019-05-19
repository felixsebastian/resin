import React from "react";
import DataPanel from "./DataPanel";
import Timeline from "./Timeline";
import { css } from "glamor";

const dataPanelCss = css({});

export default function Geo({ classNameCss, style }) {
  return (
    <div className={classNameCss} style={style}>
      <DataPanel
        className={dataPanelCss}
        items={[
          { name: "temp", value: "14deg" },
          { name: "wind speed", value: "5kph" },
          { name: "year", value: "2015" },
          { name: "prime minister", value: "kevin rudd" },
          { name: "precip", value: "15%" },
          { name: "light level", value: "300lm" },
          { name: "sun angle", value: "15deg" }
        ]}
      />
      <Timeline
        items={[
          "/graphs/1.png",
          "/graphs/2.png",
          "/graphs/3.png",
          "/graphs/4.png",
          "/graphs/5.png",
          "/graphs/6.png",
          "/graphs/4.png"
        ]}
      />
    </div>
  );
}
