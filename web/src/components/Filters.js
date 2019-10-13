import React from "react";
import Viewport from "./Viewport";
import connect from "../lib/connect";
import styled from "styled-components";

const Layout = styled(Viewport)`
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const Hint = styled.span`
  color: #aaa;
`;

export default connect(state => ({
  filteringFields: state.filteringFields
}))(({ filteringFields, actions }) => (
  <Layout>
    <div>
      {filteringFields.length === 0 && (
        <Hint>
          Click on the filter icon next to an incident field to filter by it
        </Hint>
      )}
      {filteringFields.map(field => (
        <React.Fragment key={field}>
          <input placeholder={field} />{" "}
          <span onClick={() => actions.toggleFilterFieldClicked(field)}>x</span>{" "}
        </React.Fragment>
      ))}
    </div>
  </Layout>
));
