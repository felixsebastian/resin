import React from "react";
import Viewport from "../Viewport";
import styled from "styled-components";

const BoxA = styled.div`
  display: flex;
  height: 100%;
`;

const BoxB = styled(Viewport)`
  width: 50%;
`;

export default ({ left, right }) => {
  return (
    <BoxA>
      <BoxB>{left}</BoxB>
      <BoxB>{right}</BoxB>
    </BoxA>
  );
};
