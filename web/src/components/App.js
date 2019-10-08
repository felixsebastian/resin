import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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
        {!loggedIn && window.location.pathname !== "/" && <Redirect to="/" />}
        <Box>
          <Header />
          <Page>
            <Route exact path="/" component={loggedIn ? Home : Login} />
            {loggedIn &&
              pages.index
                .filter(id => pages[id].type === "PAGE")
                .map(id => (
                  <Route
                    key={id}
                    exact
                    path={"/" + id}
                    component={pages[id].component}
                  />
                ))}
          </Page>
        </Box>
      </Router>
    );
  }
);
