import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import Options from "./Options";

const FlyoutButton = styled(Button)`
  position: relative;
`;

const Baseline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default props => {
  const [state, setState] = useState(false);

  return (
    <FlyoutButton onClick={() => setState(!state)}>
      {props.children}
      <Baseline>
        <Options
          optionSelected={props.optionSelected}
          items={props.options}
          show={state}
        />
      </Baseline>
    </FlyoutButton>
  );
};
