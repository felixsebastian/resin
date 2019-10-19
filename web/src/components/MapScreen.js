import React from "react";
import Details from "./Details";
import styled from "styled-components";
import Map from "./Map";
import Filters from "./filters";

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

const BoxD = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

const BoxE = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  height: 20rem;
`;

const BoxF = styled.div`
  width: 30rem;
  height: 100%;
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
        <Map />
      </BoxD>
    </BoxB>
    <BoxF>
      <Details />
    </BoxF>
  </BoxA>
);
