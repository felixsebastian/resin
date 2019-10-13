import React, { useState } from "react";
import {
  Form,
  TextInput,
  NumberInput,
  Button,
  TextArea,
  DatePicker,
  DatePickerInput,
  TimePicker
} from "carbon-components-react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import Padding from "../Padding";

const CREATE_INCIDENT = gql`
  mutation CreateIncident($incident: IncidentInput!) {
    createIncident(incident: $incident) {
      make
    }
  }
`;

export default () => {
  const [createIncident] = useMutation(CREATE_INCIDENT);

  const [state, setState] = useState({
    date: "",
    time: ""
  });

  return (
    <Padding>
      <Form
        onSubmit={e => {
          e.preventDefault();
          createIncident({ variables: { vehicle: state } });
        }}
      >
        <DatePicker datePickerType="single" dateFormat={"d/m/Y"}>
          <DatePickerInput
            labelText="Date"
            placeholder="dd/mm/yyyy"
            value={state.date}
            onChange={e => setState({ ...state, date: e.target.value })}
          />
        </DatePicker>
        <br />
        <TimePicker
          labelText="Time"
          required
          value={state.time}
          pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
          onChange={e => setState({ ...state, time: e.target.value })}
        />
        <br />
        <NumberInput label="Latitude" required />
        <br />
        <NumberInput label="Longitude" required />
        <br />
        <NumberInput label="Number of vehicles" required />
        <br />
        <NumberInput label="Carnage level" required />
        <br />
        <TextArea labelText="Notes" rows={4} />
        <br />
        <NumberInput label="DCA" required />
        <br />
        <TextInput labelText="Weather conditions" required />
        <br />
        <br />
        <Button type="submit">Create incident</Button>
      </Form>
    </Padding>
  );
};
