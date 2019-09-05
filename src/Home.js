import React from "react";
import styled from "styled-components";
import { symlink } from "fs";

const Floaty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Spacer = styled.div`
  height: 40%;
`;

export default () => (
  <Floaty>
    <div>
      <p>Welcome to ResIN</p>
    </div>
    <Spacer />
  </Floaty>
);
