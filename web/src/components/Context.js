import React from "react";
import Details from "./Details";
import styled from "styled-components";
import DataPanel from "./DataPanel";
import { geo, time } from "../data/dummy";
import Map from "./Map";
import Timeline from "./timeline/Timeline";
import Filters from "./filters";
import Viewport from "./Viewport";

const BoxA = styled(Viewport)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const BoxB = styled(Viewport)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const BoxD = styled(Viewport)`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

const BoxE = styled(Viewport)`
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  height: 20rem;
`;

const BoxF = styled(Viewport)`
  width: 30rem;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const BoxC = styled.div``;

export default () => (
  <BoxA>
    <BoxB>
      <BoxC>
        <Filters />
      </BoxC>
      <BoxD>
        <DataPanel items={geo} />
        <Map />
      </BoxD>
      <BoxE>
        <DataPanel items={time} />
        <Timeline />
      </BoxE>
    </BoxB>
    <BoxF>
      <Details />
    </BoxF>
  </BoxA>
);
