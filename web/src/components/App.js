import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import pages from "../config/pages";
import Page from "./Page";
import styled from "styled-components";
import connect from "../lib/connect";
import Login from "./Login";

const Box = styled.div`
  height: 100vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background-color: #bbb;
`;

export default connect(state => ({ loggedIn: state.user !== null }))(
  ({ loggedIn }) => {
    return (
      <Router>
        <Box>
          <Header />
          <Page>
            <Route exact path="/" component={loggedIn ? Home : Login} />
            {loggedIn &&
              pages.map(page => (
                <Route
                  key={page.id}
                  exact
                  path={"/" + page.id}
                  component={page.component}
                />
              ))}
          </Page>
        </Box>
      </Router>
    );
  }
);
