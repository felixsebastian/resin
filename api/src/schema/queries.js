import types from "./types";
export default `
  type Query {
    incidents: [Incident!]
    vehicles: [Vehicle!]
    sensors: [Sensor!]
  }
  `;

// type Query {
//   getEvents(timerange: Timerange): [Event]
//   getVehicle: Vehicle
// }
