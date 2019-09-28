import React from "react";
import EventDetails from "./EventDetails";
import styled from "styled-components";
import DataPanel from "./DataPanel";
import { geo, time } from "../data/dummy";
import Map from "./Map";
import Timeline from "./Timeline";
import MapLeaflet from "./MapLeaflet";

const LayoutA = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const LayoutB = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const LayoutC = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

const LayoutD = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  height: 20rem;
`;

const LayoutE = styled.div`
  width: 20rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LayoutMap = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  width: 100%;
`;

export default () => (
  <LayoutA>
    <LayoutB>
      <LayoutC>
        <DataPanel items={geo} />
        <LayoutMap>
          <MapLeaflet />
        </LayoutMap>
      </LayoutC>
      <LayoutD>
        <DataPanel items={time} />
        <Timeline />
      </LayoutD>
    </LayoutB>
    <LayoutE>
      <EventDetails />
    </LayoutE>
  </LayoutA>
);
