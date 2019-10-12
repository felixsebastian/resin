import React from "react";
import styled from "styled-components";

const BoxA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const BoxB = styled.div`
  height: 40%;
`;

export default props => (
  <BoxA>
    <div>{props.children}</div>
    <BoxB />
  </BoxA>
);
