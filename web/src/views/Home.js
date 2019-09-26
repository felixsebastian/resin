import React from "react";
import styled from "styled-components";

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
      <p>
        <b>Welcome to ResIN</b>
      </p>
      <p>
        Created by students of Swinburne University:{" "}
        <a href="http://github.com/felix-sebastian/">Trung Ahn Do</a>,{" "}
        <a href="http://github.com/felix-sebastian/">Luke McWha</a>,{" "}
        <a href="http://github.com/felix-sebastian/">Cory Misfud</a>,{" "}
        <a href="http://github.com/felix-sebastian/">Rab'a Albreiki</a> &amp;{" "}
        <a href="http://github.com/felix-sebastian/">Felix Sebastian</a>
      </p>
    </div>
    <Spacer />
  </Floaty>
);
