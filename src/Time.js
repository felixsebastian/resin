import React from "react";
import DataPanel from "./DataPanel";
import Timeline from "./Timeline";
import { css } from "glamor";
import { time } from "./data";

const dataPanelCss = css({});

export default function Geo({ classNameCss, style }) {
  return (
    <div className={classNameCss} style={style}>
      <DataPanel className={dataPanelCss} items={time} />
      <Timeline />
    </div>
  );
}
