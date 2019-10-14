import React from "react";
import Details from "./Details";
import styled from "styled-components";
import Histogram from "./Histogram";
import Filters from "./Filters";

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
        <Histogram />
      </BoxD>
    </BoxB>
    <BoxF>
      <Details />
    </BoxF>
  </BoxA>
);
