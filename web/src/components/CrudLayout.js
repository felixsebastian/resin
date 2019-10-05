import React from "react";
import Viewport from "./Viewport";
import styled from "styled-components";

const BoxA = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const BoxB = styled(Viewport)`
  flex-grow: 1;
`;

const BoxC = styled(Viewport)`
  height: 20rem;
`;

export default ({ top, bottom }) => {
  return (
    <BoxA>
      <BoxB>{top}</BoxB>
      <BoxC>{bottom}</BoxC>
    </BoxA>
  );
};
