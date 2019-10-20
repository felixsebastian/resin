import React from "react";
import Details from "./Details";
import styled from "styled-components";
import Map from "./Map";
import Filters from "./filters";
import Viewport from "./Viewport";

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

const BoxD = styled(Viewport)`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

const BoxE = styled(Viewport)`
  width: 30rem;
  display: flex;
  flex-direction: column;
`;

const BoxC = styled(Viewport)`
  overflow: visible;
  padding: 1rem;
`;

export default () => (
  <BoxA>
    <BoxB>
      <BoxC>
        <Filters />
      </BoxC>
      <BoxD>
        <Map />
      </BoxD>
    </BoxB>
    <BoxE>
      <Details />
    </BoxE>
  </BoxA>
);
