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
import moment from "moment";

const modes = ["CONVENTIONAL", "AUTONOMOUS"];

const CREATE_INCIDENT = gql`
  mutation CreateIncident($incident: Incident!) {
    createIncident(event: $incident) {
      description
    }
  }
`;

const streetTypes = [
  "ST",
  "ALY",
  "AVE",
  "CT",
  "WAY",
  "TER",
  "BLVD",
  "RAMP",
  "PL",
  "LN",
  "LOOP",
  "DR",
  "RD",
  "CIR",
  "WALK",
  "PARK",
  "ROW",
  "PATH",
  "TERR",
  "HWY",
  "EXPY",
  "HL",
  "PLZ",
  "STPS",
  "STWY",
  "LANE",
  "TUNL"
];

const parseTimestamp = (date, time) => {
  return moment(`${date} ${time}`, "DD/MM/YYYY HH:mm").valueOf() / 1000;
};

export default () => {
  const [createIncident] = useMutation(CREATE_INCIDENT);

  //Incident input does not contain the input for street type, speed limit and school zone
  const [state, setState] = useState({
    date: "",
    time: "",
    location: {
      latitude: 0,
      longitude: 0
    },
    numVehicles: 1,
    damageSeverity: "",
    description: "",
    //vehicle1: null,
    //vehicle2: null,
    dca: 0,
    mode: modes[0]
    //streetType: streetTypes[0],
    //speedLimit: 0,
    //schoolZone: false
  });

  const setField = field => e =>
    setState({ ...state, [field]: e.target.value });

  return (
    <Padding>
      <Form
        onSubmit={e => {
          e.preventDefault();
          createIncident({
            variables: {
              incident: {
                timestamp: parseTimestamp(state.date, state.time),
                location: state.location,
                numVehicles: state.numVehicles,
                damageSeverity: state.damageSeverity,
                description: state.description,
                //vehicle1: state.vehicle1,
                //vehicle2: state.vehicle2,
                dca: state.dca,
                mode: state.mode
                //streetType: state.streetType,
                //speedLimit: state.speedLimit,
                //schoolZone: state.schoolZone
              }
            }
          });
        }}
      >
        <DatePicker
          datePickerType="single"
          dateFormat={"d/m/Y"}
          onChange={e => {
            const toDate = new Date(e[0]);
            const dateToString =
              toDate.getDate() +
              "/" +
              (toDate.getMonth() + 1) +
              "/" +
              toDate.getFullYear();
            setState({ ...state, date: dateToString });
          }}
        >
          <DatePickerInput
            labelText="Date"
            placeholder="dd/mm/yyyy"
            value={state.date}
            required
            //pattern="( (([012][0-9])|(3[012]))/((0[0-9])|(1[012]))/([1-9][0-9][0-9][0-9]) )"
            /*
            onChange={e => {
              setField("date");
            }}
            */
          />
        </DatePicker>
        <br />
        <TimePicker
          labelText="Time"
          required
          maxLength={5}
          pattern="([01][0-9]|2[0-3]):([0-5][0-9])"
          value={state.time}
          onChange={e => {
            setState({ ...state, time: e.target.value });
          }}
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
        {/*<TextInput labelText="Weather" required />
        <br />*/}
        <Select labelText="Mode" value={state.mode} onChange={setField("mode")}>
          {modes.map(mode => (
            <SelectItem value={mode} text={mode} />
          ))}
        </Select>
        <br />
        {/*
        <Select
          labelText="Street Type"
          value={state.streetType}
          onChange={setField("streetType")}
        >
          {streetTypes.map(type => (
            <SelectItem value={type} text={type} />
          ))}
        </Select>
        <br />
        <NumberInput
          labelText="Speed Limit"
          required
          value={state.speedLimit}
          onChange={setField("speedLimit")}
        />
        <br />
        <Select
          labelText="School Zone"
          value={state.schoolZone}
          onChange={setField("schoolZone")}
        >
          <SelectItem value={true} text={"Yes"} />
          <SelectItem value={false} text={"No"} />
        </Select>
        */}
        <br />
        <Button type="submit">Create incident</Button>
      </Form>
    </Padding>
  );
};
