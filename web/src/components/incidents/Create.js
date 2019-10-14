import React, { useState } from "react";
import {
  Form,
  TextInput,
  NumberInput,
  Button,
  TextArea,
  DatePicker,
  DatePickerInput,
  TimePicker,
  Select,
  SelectItem
} from "carbon-components-react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import Padding from "../Padding";

const modes = ["CONVENTIONAL", "AUTONOMOUS"];

const CREATE_INCIDENT = gql`
  mutation CreateIncident($incident: IncidentInput!) {
    createIncident(event: $incident) {
      timestamp
      latitude
      longitude
      numVehicles
      damageSeverity
      description
      vehicle1
      vehicle2
      dca
      weatherDesc
      mode
    }
  }
`;

export default () => {
  const [createIncident] = useMutation(CREATE_INCIDENT);

  const [state, setState] = useState({
    date: "",
    time: "",
    latitude: 0,
    longitude: 0,
    numVehicles: 1,
    damageSeverity: "",
    description: "",
    vehicle1: null,
    vehicle2: null,
    dca: 0,
    weatherDesc: "",
    mode: modes[0]
  });

  const setField = field => e =>
    setState({ ...state, [field]: e.target.value });

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
            onChange={setField("date")}
          />
        </DatePicker>
        <br />
        <TimePicker
          labelText="Time"
          required
          pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
          value={state.time}
          onChange={setField("time")}
        />
        <br />
        <NumberInput
          label="Latitude"
          required
          value={state.latitude}
          min={-180}
          max={180}
          onChange={setField("latitude")}
        />
        <br />
        <NumberInput
          label="Longitude"
          required
          min={-180}
          max={180}
          value={state.longitude}
          onChange={setField("longitude")}
        />
        <br />
        <NumberInput
          label="Number of vehicles"
          required
          value={state.numVehicles}
          onChange={setField("numVehicles")}
        />
        <br />
        <TextInput
          labelText="Damage"
          required
          value={state.damageSeverity}
          onChange={setField("damageSeverity")}
        />
        <br />
        <TextArea
          labelText="Notes"
          rows={4}
          value={state.description}
          onChange={setField("description")}
        />
        <br />
        <NumberInput
          label="DCA"
          required
          value={state.dca}
          onChange={setField("dca")}
        />
        <br />
        <TextInput labelText="Weather" required />
        <br />
        <Select labelText="Mode" value={state.mode} onChange={setField("mode")}>
          {modes.map(mode => (
            <SelectItem value={mode} text={mode} />
          ))}
        </Select>
        <br />
        <br />
        <Button type="submit">Create incident</Button>
      </Form>
    </Padding>
  );
};
