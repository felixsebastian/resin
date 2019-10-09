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
      <TextInput labelText="Make" required />
      <br />
      <NumberInput label="Model" required />
      <br />
      <NumberInput label="Sensors" required />
      <br />
      <TextArea labelText="Notes" rows={4} required />
      <br />
      <br />
      <Button type="submit">Create vehicle</Button>
    </Form>
  </FormBox>
);
