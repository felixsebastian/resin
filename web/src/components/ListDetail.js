import React from "react";
import Viewport from "./Viewport";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  height: 100%;
`;

const List = styled(Viewport)`
  width: 25rem;
`;

const Item = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #eee;

  :hover {
    background-color: #fafafa;
    cursor: pointer;
  }
`;

const Detail = styled(Viewport)`
  flex-grow: 1;
  flex-basis: 0;
`;

export default ({ items, children, onItemClicked }) => {
  return (
    <Box>
      <List>
        {items.map(item => (
          <Item
            onClick={() =>
              onItemClicked(typeof item === "string" ? item : item.id)
            }
          >
            {typeof item === "string" ? item : item.text}
          </Item>
        ))}
      </List>
      <Detail>{children}</Detail>
    </Box>
  );
};
