import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  border-top: 0.2rem solid #aaa;
  background-color: #ccc;
  color: #222;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default ({ time }) => <Layout>{time ? `${time}` : "-:--:--"}</Layout>;
