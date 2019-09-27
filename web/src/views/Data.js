import React from "react";
import Viewport from "./Viewport";
import styled from "styled-components";
import { Form, TextInput, Button, DataTable } from "carbon-components-react";

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell
} = DataTable;

const Layout = styled.div`
  display: flex;
  height: 100%;
`;

export default () => {
  return (
    <Layout>
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
    </Layout>
  );
};
