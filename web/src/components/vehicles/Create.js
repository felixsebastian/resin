import React, { useState } from "react";
import {
  Form,
  TextInput,
  NumberInput,
  Button,
  Select,
  SelectItem
} from "carbon-components-react";
import moment from "moment";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import Padding from "../Padding";

const CREATE_VEHICLE = gql`
  mutation CreateVehicle($vehicle: VehicleInput!) {
    createVehicle(vehicle: $vehicle) {
      make
    }
  }
`;

const types = ["CAR", "MOTORBIKE", "BUS", "TRUCK"];

const makes = [
  "WAYMO",
  "APPLE",
  "TESLA",
  "MITSUBISHI",
  "HONDA",
  "TOYOTA",
  "FORD",
  "GM"
];

const autonomyLevels = [
  "NONE",
  "DRIVER_ASSISTANCE",
  "PARTIAL_ASSISTANCE",
  "HIGH_AUTOMATION",
  "FULL_AUTOMATION"
];

const countries = [
  "JAPAN",
  "SOUTH_KOREA",
  "USA",
  "GERMANY",
  "UK",
  "CHINA",
  "RUSSIA",
  "INDIA",
  "SPAIN",
  "BRAZIL",
  "MEXICO",
  "FRANCE",
  "IRAN",
  "CZECH_REPUBLIC",
  "TURKEY",
  "SLOVAKIA",
  "INDONESIA",
  "THAILAND",
  "CANADA",
  "ITALY"
];

export default () => {
  const [createVehicle] = useMutation(CREATE_VEHICLE);

  const [state, setState] = useState({
    type: types[0],
    registration: "",
    vin: "",
    make: makes[0],
    model: "",
    yearOfManufacture: moment().year(),
    countryOfManufacture: countries[0],
    autonomyLevel: autonomyLevels[0],
    sensors: ""
  });

  return (
    <Padding>
      <Form
        onSubmit={e => {
          e.preventDefault();
          createVehicle({ variables: { vehicle: state } });
        }}
      >
        <Select
          labelText="Type"
          value={state.type}
          onChange={e => setState({ ...state, type: e.target.value })}
        >
          {types.map(type => (
            <SelectItem value={type} text={type} />
          ))}
        </Select>
        <br />
        <TextInput
          labelText="Reg #"
          required
          value={state.registration}
          onChange={e => setState({ ...state, registration: e.target.value })}
        />
        <br />
        <TextInput
          labelText="VIN #"
          required
          value={state.vin}
          onChange={e => setState({ ...state, vin: e.target.value })}
        />
        <br />
        <Select
          labelText="Make"
          value={state.make}
          onChange={e => setState({ ...state, make: e.target.value })}
        >
          {makes.map(make => (
            <SelectItem value={make} text={make} />
          ))}
        </Select>
        <br />
        <TextInput
          labelText="Model"
          required
          value={state.model}
          onChange={e => setState({ ...state, model: e.target.value })}
        />
        <br />
        <NumberInput
          label="Year"
          required
          value={state.yearOfManufacture}
          onChange={e =>
            setState({ ...state, yearOfManufacture: e.target.value })
          }
        />
        <br />
        <Select
          labelText="Country"
          value={state.countryOfManufacture}
          onChange={e =>
            setState({ ...state, countryOfManufacture: e.target.value })
          }
        >
          {countries.map(country => (
            <SelectItem value={country} text={country} />
          ))}
        </Select>
        <br />
        <Select
          labelText="Autonomy Level"
          value={state.autonomyLevel}
          onChange={e => setState({ ...state, autonomyLevel: e.target.value })}
        >
          {autonomyLevels.map(autonomyLevel => (
            <SelectItem value={autonomyLevel} text={autonomyLevel} />
          ))}
        </Select>
        <br />
        <TextInput
          labelText="Sensors"
          required
          value={state.sensors}
          onChange={e => setState({ ...state, sensors: e.target.value })}
        />
        <br />
        <br />
        <Button type="submit">Create vehicle</Button>
      </Form>
    </Padding>
  );
};
