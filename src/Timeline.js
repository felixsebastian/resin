import React from "react";
import { css } from "glamor";
import { time } from "./data";
import TimelineGraph from "./TimelineGraphAlt"
import styled from 'styled-components';

const Container = styled.div`
  height: 3rem;
  border-bottom: 1px solid #eee;
`;

const timelineCss = css({
  overflow: "hidden",
  width: "100%"
});

const itemCss = css({
  "background-color": "#ddd",
  height: "3rem",
  display: "block",
  width: 1000,
  "border-bottom": "1px solid #eee"
});

export default function Timeline({ items }) {
  return (
    <div className={timelineCss}>
      <Container>
        <TimelineGraph />
      </Container>
    </div>
  );
}
