import React from "react";
import styled from "styled-components";
import { Form, FormGroup, TextInput, Button } from "carbon-components-react";

const Floaty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default () => {
  return (
    <Floaty>
      <Form>
        <TextInput required />
      </Form>
      <Button type="submit">Save</Button>
    </Floaty>
  );
};
