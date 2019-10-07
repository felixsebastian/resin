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
        <TableContainer title="Incidents">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Time</TableHeader>
                <TableHeader>Location</TableHeader>
                <TableHeader># of Vehicles</TableHeader>
                <TableHeader>Carnage Level</TableHeader>
                <TableHeader>Notes</TableHeader>
                <TableHeader>DCA</TableHeader>
                <TableHeader>Weather Conditions</TableHeader>
                <TableHeader>Actions</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableCell>hi</TableCell>
              <TableCell>hi</TableCell>
              <TableCell>hi</TableCell>
              <TableCell>hi</TableCell>
              <TableCell>hi</TableCell>
              <TableCell>hi</TableCell>
              <TableCell>hi</TableCell>
              <TableCell>delete</TableCell>
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
