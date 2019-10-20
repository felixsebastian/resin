export default `
  type Mutation {
    createIncident(incident: IncidentInput!): [Incident!]
  }
`;

// createIncident(event: Incident!): [Incident!]
// deleteAllIncidents: [Incident!]
// createVehicle(vehicle: Vehicle!): [Vehicle!]
// deleteAllVehicles: [Incident!]
// createSensor(sensor: Sensor!): [Sensor!]
// deleteAllSensors: [Sensor!]
