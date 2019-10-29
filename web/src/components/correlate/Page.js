import React from "react";
import styled from "styled-components";
import Histogram from "./Histogram";
import Controls from "./Controls";
import Viewport from "../Viewport";
import Filters from "../filters";

const BoxA = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const BoxB = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const BoxC = styled(Viewport)`
  padding: 1rem;
`;

const BoxD = styled(Viewport)`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const BoxE = styled(Viewport)`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

export default () => (
  <BoxA>
    <BoxB>
      <BoxC>
        <Filters />
      </BoxC>
      <BoxD>
        <Controls />
      </BoxD>
      <BoxE>
        <Histogram />
      </BoxE>
    </BoxB>
  </BoxA>
);
