import React from "react";
import Viewport from "./Viewport";
import styled from "styled-components";

const BoxA = styled.div`
  display: flex;
  height: 100%;
`;

const BoxB = styled(Viewport)`
  flex-grow: 1;
`;

const BoxC = styled(Viewport)`
  width: 30rem;
`;

export default ({ left, right }) => {
  return (
    <BoxA>
      <BoxB>{left}</BoxB>
      <BoxC>{right}</BoxC>
    </BoxA>
  );
};
