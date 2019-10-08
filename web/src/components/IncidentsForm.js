import React from "react";
import styled from "styled-components";
import {
  Form,
  TextInput,
  NumberInput,
  Button,
  TextArea
} from "carbon-components-react";

const FormBox = styled.div`
  padding: 1rem;
`;

export default () => (
  <FormBox>
    <Form>
      <TextInput labelText="Time" required />
      <br />
      <NumberInput label="Latitude" required />
      <br />
      <NumberInput label="Longitude" required />
      <br />
      <NumberInput label="Number of vehicles" required />
      <br />
      <NumberInput label="Carnage level" required />
      <br />
      <TextArea labelText="Notes" rows={4} required />
      <br />
      <NumberInput label="DCA" required />
      <br />
      <TextInput labelText="Weather conditions" required />
      <br />
      <br />
      <Button type="submit">Create incident</Button>
    </Form>
  </FormBox>
);
