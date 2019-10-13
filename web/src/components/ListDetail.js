import React from "react";
import Viewport from "./Viewport";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  height: 100%;
`;

const List = styled(Viewport)`
  width: 30rem;
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
`;

export default ({ items, children, listItemClicked }) => {
  return (
    <Box>
      <List>
        {items.map(item => (
          <Item
            onClick={() =>
              listItemClicked(typeof item === "string" ? item : item.id)
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
