import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import pages from "../config/pages";
import Page from "./Page";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background-color: #bbb;
`;

export default () => {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Page>
          <Route exact path="/" component={Home} />
          {pages.map(page => (
            <Route
              key={page.id}
              exact
              path={"/" + page.id}
              component={page.component}
            />
          ))}
        </Page>
      </Wrapper>
    </Router>
  );
};
