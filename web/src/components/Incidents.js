import React from "react";
import SplitLayout from "./SplitLayout";
import styled from "styled-components";
import {
  Form,
  TextInput,
  NumberInput,
  Button,
  DataTable,
  TextArea
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

const FormBox = styled.div`
  padding: 1rem;
`;

export default () => {
  return (
    <SplitLayout
      left={
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
      }
      right={
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
      }
    />
  );
};
