import React from "react";
import Viewport from "./Viewport";
import styled from "styled-components";
import {
  Form,
  FormGroup,
  TextInput,
  Button,
  DataTable
} from "carbon-components-react";

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell
} = DataTable;

const Floaty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default () => {
  return (
    <>
      <Viewport>
        <TableContainer title="Data Sources">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>Type</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableCell>hi</TableCell>
              <TableCell>hi</TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </Viewport>
      <Viewport>
        <Form>
          <TextInput required />
        </Form>
        <Button type="submit">Save</Button>
      </Viewport>
    </>
  );
};
