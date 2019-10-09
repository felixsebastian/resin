import React, { useState } from "react";
import CentredLayout from "./CentredLayout";
import { LOG_IN } from "../config/constants";
import axios from "axios";
import { Form, TextInput, Button } from "carbon-components-react";
import connect from "../lib/connect";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

const greetings = [
  "Good morrow",
  "G'Day",
  "Hola",
  "Bonjour",
  "Guten tag",
  "Namaste"
];

const greeting = greetings[Math.round(Math.random() * (greetings.length - 1))];

export default compose(
  connect(),
  withRouter
)(props => {
  const [state, setState] = useState({
    username: "",
    password: "",
    logInFailed: false
  });

  const setUsername = e => setState({ ...state, username: e.target.value });
  const setPassword = e => setState({ ...state, password: e.target.value });

  const submit = e => {
    e.preventDefault();
    axios.post(LOG_IN, state).then(function(response) {
      if (response.data.success) {
        props.actions.logIn(response.data.token, response.data.username);
      } else {
        setState({ ...state, logInFailed: true });
      }
    });
  };

  return (
    <CentredLayout>
      <h3>{greeting}</h3>
      <br />
      <Form onSubmit={submit}>
        <TextInput
          labelText="Username"
          value={state.username}
          onChange={setUsername}
        />
        <br />
        <TextInput
          type="password"
          labelText="Password"
          value={state.password}
          onChange={setPassword}
        />
        <br />
        {state.logInFailed && (
          <>
            <p>Log in failed.</p>
            <br />
          </>
        )}
        <Button type="submit" onClick={submit}>
          Log In
        </Button>
        <br />
        <br />
        <p>
          <small>
            <a href="#">Need help?</a>
          </small>
        </p>
      </Form>
    </CentredLayout>
  );
});
