import React from "react";
import styled from "styled-components";
import Viewport from "../Viewport";

const BoxA = styled(Viewport)`
  position: absolute;
  top: 0.5rem;
  display: ${props => (props.show ? "block" : "none")};
  z-index: 100;
`;

const BoxB = styled.div`
  padding: 1rem;
`;

export default props => (
  <BoxA show={props.show}>
    {props.items.map(item => (
      <BoxB key={item.id} onClick={() => props.optionSelected(item.id)}>
        {item.text}
      </BoxB>
    ))}
  </BoxA>
);
