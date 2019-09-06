import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Data from "./Data";
import styled from "styled-components";

const Page = styled.div`
  height: 100vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background-color: #ccc;
`;

const PageContent = styled.div`
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
`;

export default () => {
  return (
    <Router>
      <Page>
        <Header />
        <PageContent>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/data" component={Data} />
        </PageContent>
      </Page>
    </Router>
  );
};
